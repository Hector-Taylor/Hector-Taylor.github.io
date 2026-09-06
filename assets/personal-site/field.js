/* A folded optical surface. This is artwork, not a model of neural activity. */
(() => {
  'use strict';

  const canvas = document.querySelector('#membrane');
  const hero = document.querySelector('.hero');
  const field = document.querySelector('.optical-field');
  if (!canvas || !hero || !field) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Query switches let the local review exercise the two fallback states.
  const options = new URLSearchParams(window.location.search);
  if (options.has('fallback')) return;

  const gl = canvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    depth: false,
    powerPreference: 'low-power',
  });
  if (!gl) return;

  const vertexSource = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;
    uniform vec2 resolution;
    uniform float time;
    uniform vec2 pointer;

    mat2 rotate(float angle) {
      float sine = sin(angle);
      float cosine = cos(angle);
      return mat2(cosine, -sine, sine, cosine);
    }

    vec3 orient(vec3 point) {
      point.xz = rotate(0.3 + time * 0.075 + pointer.x * 0.18) * point.xz;
      point.yz = rotate(0.88 + 0.16 * sin(time * 0.09) + pointer.y * 0.12) * point.yz;
      point.xy = rotate(-0.45) * point.xy;
      return point;
    }

    float surface(vec3 point) {
      point = orient(point);
      float angle = atan(point.z, point.x);
      float radius = 0.98 + 0.15 * sin(3.0 * angle + time * 0.13);
      float fold = 0.23 * sin(2.0 * angle - time * 0.11);
      vec2 section = vec2(length(point.xz) - radius, point.y + fold);
      section = rotate(angle * 1.5 + time * 0.06) * section;
      // An elliptical section gives the loop a ribbon-like edge.
      return (length(section * vec2(1.0, 1.65)) - 0.27) / 1.65;
    }

    vec3 surfaceNormal(vec3 point) {
      const float epsilon = 0.003;
      vec2 offset = vec2(epsilon, 0.0);
      return normalize(vec3(
        surface(point + offset.xyy) - surface(point - offset.xyy),
        surface(point + offset.yxy) - surface(point - offset.yxy),
        surface(point + offset.yyx) - surface(point - offset.yyx)
      ));
    }

    vec3 spectrum(float phase) {
      return 0.56 + 0.39 * cos(6.28318 * (phase + vec3(0.05, 0.35, 0.65)));
    }

    void main() {
      float aspect = resolution.x / resolution.y;
      vec2 uv = (gl_FragCoord.xy - 0.5 * resolution) / resolution.y;
      float mobile = 1.0 - step(0.85, aspect);
      uv.x -= mix(aspect * 0.21, aspect * 0.07, mobile);
      uv.y -= mix(0.06, 0.26, mobile);
      // Keep the whole sculpture within narrow portrait screens.
      uv *= mix(3.25, max(5.1, 3.4 / aspect), mobile);

      vec3 paper = vec3(0.949, 0.937, 0.910);
      vec3 color = paper;
      vec3 origin = vec3(uv, 3.7);
      vec3 ray = vec3(0.0, 0.0, -1.0);
      float travel = 0.0;
      bool hit = false;
      vec3 point;
      for (int stepIndex = 0; stepIndex < 72; stepIndex++) {
        point = origin + ray * travel;
        float distance = surface(point);
        if (distance < 0.0018) { hit = true; break; }
        travel += distance * 0.72;
        if (travel > 6.0) break;
      }

      if (hit) {
        vec3 normal = surfaceNormal(point);
        vec3 local = orient(point);
        float facing = clamp(dot(normal, -ray), 0.0, 1.0);
        float edge = pow(1.0 - facing, 2.1);
        float light = max(dot(normal, normalize(vec3(-0.8, 1.2, 2.3))), 0.0);
        float angle = atan(local.z, local.x);
        float phase = facing * 2.6 + local.y * 1.4 + sin(angle * 3.0) * 0.18;
        vec3 iridescence = spectrum(phase + time * 0.014);
        vec3 silver = mix(vec3(0.14, 0.20, 0.26), vec3(0.87, 0.88, 0.83), light);
        color = mix(silver, iridescence, 0.43 + edge * 0.42);

        // Fine interference contours are bounded to the surface.
        float contour = sin((facing * 8.0 + local.y * 3.0) * 30.0);
        float rings = smoothstep(0.79, 1.0, contour);
        color = mix(color, color * 0.45, rings * 0.34);
        float gleam = pow(max(dot(reflect(ray, normal), normalize(vec3(-0.9, 1.7, 2.0))), 0.0), 26.0);
        color += vec3(0.35, 0.33, 0.29) * gleam;
        color = mix(color, paper, 0.06);
      }

      // Stable, very fine grain avoids temporal flicker.
      float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.008;
      gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    }
  `;

  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
    console.warn('Optical surface shader:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  const vertex = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragment = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) return;
  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn('Optical surface program:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return;
  }
  gl.useProgram(program);

  const geometry = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, geometry);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const uniforms = {
    resolution: gl.getUniformLocation(program, 'resolution'),
    time: gl.getUniformLocation(program, 'time'),
    pointer: gl.getUniformLocation(program, 'pointer'),
  };

  let paused = reducedMotion.matches || options.has('still');
  let visible = true;
  let contextLost = false;
  let animationFrame = 0;
  let previousFrame = 0;
  let elapsed = 12;
  const targetPointer = { x: 0, y: 0 };
  const currentPointer = { x: 0, y: 0 };

  function draw() {
    if (contextLost) return;
    gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(uniforms.time, elapsed);
    gl.uniform2f(uniforms.pointer, currentPointer.x, currentPointer.y);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function resize() {
    const bounds = hero.getBoundingClientRect();
    // Bound GPU work on large and high-density screens.
    const density = Math.min(window.devicePixelRatio || 1, 1.35);
    const scale = Math.min(density, 1600 / bounds.width, 1100 / bounds.height);
    canvas.width = Math.max(1, Math.round(bounds.width * scale));
    canvas.height = Math.max(1, Math.round(bounds.height * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
    draw();
  }

  function animate(timestamp) {
    animationFrame = 0;
    if (paused || !visible || document.hidden || contextLost) return;
    if (!previousFrame) previousFrame = timestamp;
    const delta = timestamp - previousFrame;
    if (delta >= 1000 / 30) {
      elapsed += Math.min(delta / 1000, 0.1);
      previousFrame = timestamp;
      currentPointer.x += (targetPointer.x - currentPointer.x) * 0.055;
      currentPointer.y += (targetPointer.y - currentPointer.y) * 0.055;
      draw();
    }
    animationFrame = requestAnimationFrame(animate);
  }

  function syncAnimation() {
    cancelAnimationFrame(animationFrame);
    previousFrame = 0;
    animationFrame = 0;
    canvas.dataset.motion = paused ? 'paused' : (visible && !document.hidden ? 'playing' : 'suspended');
    if (!paused && visible && !document.hidden && !contextLost) {
      animationFrame = requestAnimationFrame(animate);
    }
  }

  reducedMotion.addEventListener('change', event => {
    paused = event.matches;
    syncAnimation();
  });
  hero.addEventListener('pointermove', event => {
    if (paused || event.pointerType !== 'mouse') return;
    const bounds = hero.getBoundingClientRect();
    targetPointer.x = (event.clientX - bounds.left) / bounds.width - 0.5;
    targetPointer.y = (event.clientY - bounds.top) / bounds.height - 0.5;
  });
  hero.addEventListener('pointerleave', () => {
    targetPointer.x = 0;
    targetPointer.y = 0;
  });
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    syncAnimation();
  }).observe(hero);
  new ResizeObserver(resize).observe(hero);
  document.addEventListener('visibilitychange', syncAnimation);
  canvas.addEventListener('webglcontextlost', event => {
    event.preventDefault();
    contextLost = true;
    cancelAnimationFrame(animationFrame);
    field.classList.remove('is-ready');
    canvas.dataset.motion = 'fallback';
  });

  resize();
  field.classList.add('is-ready');
  syncAnimation();
})();
