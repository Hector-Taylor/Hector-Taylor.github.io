---
layout: page
title: Planetary ViSOR
description: An immersive data visualization tool for planetary scientists to compare heterogenous datasets
img: assets/img/3.jpg
importance: 2
category: Research Software 
---

Planetary Visor is an innovative virtual reality tool designed to merge geologic and geographic data of Mars with spectroscopy data from orbiting satellites. It offers an immersive experience that localizes Martian terrain in detailed 3D, correlating it with data from the Mars Science Laboratory Curiosity rover and the Mars 2020 Perseverance rover missions. This tool transcends traditional visualization methods, offering an intuitive understanding of the Martian landscape and its mineral composition at different scales. 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

Contribution: 
Key Features: 
Redesigned interface, developed VR Specific navigation tools, created modular workflow for VR Menu items that will be used throughout different projects - taking into account design principles from Yada yada yada UX/UI bullshit. Accepted into IEEE ‘VR 2021. 

3D Terrain Visualization: Integrates images from the curiosity rover to construct a detailed 3D representation of the Martian terrain 
Dual Data Integration: Combines VNIR spectroscopic data from orbiting satellites with ground images from Mars rovers, presenting a comprehensive view of the terrain’s physical and mineralogical aspects. 
Immersive VR Experience: Offers an interactive VR environment that provides scientists with a realistic sense of scale and spatial orientation, which is not achievable with conventional tools.
Seamless Dataset Rendering: Capable of rendering datasets at vastly different scales simultaneously, enhancing the understanding of the Martian landscape. 

Impact and applications: 
Mars ViSOR has implications for Mars exploration and research. It assists scientists in gaining a geometric understanding of spectral data, enriching the geological context of their studies. The tool improves navigation and scale perception in Martian terrain analysis, leading to enhanced scientific discovery. Its applications extend to ongoing Mars rover missions, contributing to better data representation and analysis. 


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %}
