---
layout: post
title: "Interactive Fractals"
categories: personal-dev mastery productivity
tags: programming math resources visualization trigonometry calculus fractal interactive
author: "Amanda Lynn Elliott"
permalink: /blog/2020/03/interactive-fractals/
excerpt_separator: <!--more-->
---

<iframe src="https://giphy.com/embed/TGvKKL2jPwG7jC5m5Z" width="480" height="460" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://codepen.io/amandalynnelliott/pen/YzPeMGP">Interactive Sierpinski Triangle</a></p>

I am deeply inspired by fractals. They seem to represent the convergence of beauty and logic. In addition to being fun to play with, I love undertaking the challenge of understanding the math that they represent.

I made the following four interactive fractals using JavaScript and HTML5 Canvas, and you can play with them on the code-snippet showcasing website [CodePen](https://codepen.io/amandalynnelliott).

**Click the fractal you want to interact with:**

<div class="grid-container">
<div class="grid-item item-1">
    <a href="https://codepen.io/amandalynnelliott/pen/YzPeMGP">
        <img class="no-popup" src="{{site.url}}/assets/img/2020/03/fractals/1.png" />
    </a>
</div>
<div class="grid-item item-2">
    <a href="https://codepen.io/amandalynnelliott/pen/rNaJbyq">
        <img class="no-popup" src="{{site.url}}/assets/img/2020/03/fractals/2.png" />
    </a>
</div>
<div class="grid-item item-3">
    <a href="https://codepen.io/amandalynnelliott/pen/GRgQLMj">
        <img class="no-popup" src="{{site.url}}/assets/img/2020/03/fractals/3.png" />
    </a>
</div>  
<div class="grid-item item-4">
    <a href="https://codepen.io/amandalynnelliott/pen/YzPeMvq">
        <img class="no-popup" src="{{site.url}}/assets/img/2020/03/fractals/4.png" />
    </a>
</div>
</div>

*The fractal code is based on the tutorials presented by [Coding Math](https://www.youtube.com/watch?v=bIfNwgUVjV8&list=PL7wAPgl1JVvWZPcT0fEfSv5EhLbfWFfVC).*


### Math Visualization Resources

As I continue to explore math, I notice how I feel lost when I cannot visualize what is happening. However, when there are visualizations available, I find them incredible. The following are resources that I've been using as I start my math education journey.

![unit circle animated]({{ site.url }}/assets/img/2020/03/unit-circle.gif)
<!--more-->
#### 3Blue1Brown

[3Blue1Brown's YouTube channel](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw) is full of unique and incredible math visualizations. When I first started watching his videos, I thought that he painstakingly animated all of his content using standard animation software... but I was pleasantly surprised. He programs each of his visualizations using a Python library that he has developed over the years. He scripts each visualization to output to a video file.

His video on divergence and curl is an superb testament to the power of visualization.

{% include embed-YouTube.html id="rB83DpBJQsE" %}

#### GeoGebra

Another source of visual math insight is [GeoGebra](https://www.geogebra.org/u/amandalynnelliott#favorites) which allows you to visualize various proofs, matrix transformations, or higher math concepts with ease. The community uploads all kinds of teaching aids and resources.

![GeoGebra Sine and Cosine Sums]({{ site.url }}/assets/img/2020/03/geogebra.gif)
*Visualization made by [Tim Brzezinski](https://www.geogebra.org/m/gNVjYaPy).*

#### Desmos

[Desmos](https://www.desmos.com/calculator/eg5he4xpg9) is a deceptively powerful graphing tool that also has fascinating presets for those daring to explore. You can plug in your own equations with variables and enable sliders and animations.

![Desmos example]({{ site.url }}/assets/img/2020/03/desmos.gif)
*Play with the [Parametric Cycloid](https://www.desmos.com/calculator/eg5he4xpg9).*

#### Brilliant

A dedication to making math intuitive is why I have a [Brilliant](https://brilliant.org/courses/) subscription. Their courses contain many interactive examples going as high up as Differential Equations and Group Theory.

![Brilliant example]({{ site.url }}/assets/img/2020/03/brilliant.gif)
This polar coordinate flower visualization is a part of [Brilliant's Trigonometry course](https://brilliant.org/courses/trigonometry/).

*There is something about dragging a slider that makes things click in my head!*


### Beginnings

I have a giant (and ever growing) list of math visualizations that I want to program. It seemed right to start with the basics: a simple [2D Cartesian coordinate plane](https://codepen.io/amandalynnelliott/pen/rNaJbPg). Here's a demo of using it to plot vectors that shows the panning and zooming functionality.

![Cartesian 2D Coordinate Plane]({{ site.url }}/assets/img/2020/03/vector-math.gif)

More programming math visualizations to come.

<blockquote>Why is geometry often described as “cold” and “dry?” One reason lies in its inability to describe the shape of a cloud, a mountain, a coastline, or a tree. Clouds are not spheres, mountains are not cones, coastlines are not circles, and bark is not smooth, nor does lightning travel in a straight line… Nature exhibits not simply a higher degree but an altogether different level of complexity.<footer>— Benoit Mandelbrot</footer></blockquote>
