---
layout: page
title: COVID Campus 
description: Public Health decsion making sim game 
img: assets/img/COVIDsim/Homescreen.png
importance: 2
category: Research Software
related_publications: 
---

CovidCampus is an interactive, simulation-style game created to educate players about health decisions during the COVID-19 pandemic. Developed by a multidisciplinary team, it started as a mobile AR app focusing on Ebole, but was retooled for COVID-19. The final product, a desktop-based game, empowers players to make daily health decisions, visually representing the impact of these choices on their risk of COVID-19 infection. It aims to increase awareness and encourage safer behaviors among players, particularly college students. 


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
    Character creation screen: Here users are able to explore ideas of identity intersectionality with different characters having unique predispositions and experiences with public health. 
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

For this game, I designed every last 3D environment and co-lead the development of the display software with another software engineer. Designed all of the worlds and oversaw the development of the experiment and the questions we hoped to ask from the very beginning. 
Designed 3D environments, presentation of information, lighting, and aided in data analysis work. Paper can be found here.

Key Features: 
Interactive Decision Making: Players navigate through a series of daily decisions impacting their virtual health risk. 
Real-time Feedback: A probability bar indicates the infection risk based on the player’s choices. 
Avatar Personalization: Users can select an avatar, enhancing engagement and personal relevance. 
Educational Insights: The game provides immediate feedback on the safety of decisions, teaching players about risk factors in real-world scenarios. 

CovidCampus demonstrates significant educational value, specifically in public health awareness. It successfully increases players' confidence in making safety-related inquiries and encourages behavioral changes to reduce COVID-19 risk. By simulating real-world scenarios, the game influences players to adopt safer habits, such as avoiding crowded spaces and practicing social distancing. Its application extends beyond academic settings, potentially serving as a valuable tool in public health campaigns and educational programs.

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
