---
layout: post
title: "Undergrad Research Projects"
categories: personal-dev announcements mastery
tags: undergrad undergraduate physics math science STEM ball lightning research engineering
author: "Amanda Lynn Elliott"
permalink: /blog/2024/01/undergrad/
excerpt_separator: <!--more-->
---

It's been a wild journey since I wrote about my experience of deciding to [switch from art to a physics career]({{ site.url }}/blog/2019/07/finding-purpose/), and since recapping on my [first semester]({{ site.url }}/blog/2020/01/first-semester/) of undergrad in 2020. Undergrad was very busy. It felt like I had just started to get into the swing of things, but then we were hit with the Coronavirus pandemic, and my university joined the vast majority in the country to switch to completely remote learning for a semester, then to hybrid, and then back to in-person.

Once I decided that physics was the path for me, the implication of that meant getting a PhD. The process of applying and getting accepted into a graduate physics program was demanding, but rewarding.

During the pandemic, I took advantage of the remote learning to take an electrical engineering internship. I worked on projects for the Department of Defense, and then got a summer internship in Colorado to work on a physics research project for CERN. Later, during senior year, I did a plasma simulation project to investigate the mysterious weather phenomenon, ball lightning.

It was a very productive four years. After graduating, I moved from Florida to upstate New York for graduate school at Univeristy of Rochester. Currently being on winter break in-between semesters feels like the perfect time to recap on my undergrad research projects here.

<!--more-->

### Department of Defense Projects

Sophmore year, I did a rewarding year-long electrical engineering internship at [Mainstream Engineering](https://mainstream-engr.com/). Working there allowed me to use electronics to do research for the Department of Defense while collaborating with engineers from a variety of fields, such as electrical, mechanical, and chemical.

I worked on two projects while I was there. Since these projects are ITAR restricted, I can't describe them in detail, but can provide overviews.

The first project was funded by the Air Force. The goal of this project is to create a device that monitors a constant speed drive on A-10 aircrafts. The developed device reads a voltage pulse from a variable reluctance sensor and logs data for each flight.

<figure>
<img src="{{ site.url }}/assets/img/2024/01/A-10.webp" alt="Airforce A-10 Warthog Aircraft" caption="Airforce A-10 Warthog Aircraft" />
<figcaption>Source: <a href="https://www.thedrive.com/the-war-zone/37233/the-a-10-warthog-is-preparing-for-its-biggest-upgrade-in-over-a-decade">The War Zone</a></figcaption>
</figure>

The hardware and software that I worked on was tested successfully by the Air Force, in following with the testing plan that I developed.

One of my favorite parts of this project was reverse engineering a variable reluctance sensor, which included using a scanning electron microscope to identify unknown metals using energy-dispersive X-ray spectroscopy and running tests on my prototypes. Building and testing this prototypes was also fun, and involved 3D printing, winding solenoids, and sizing various magnets.

The second project I worked on was a novel liquid nitrogen generation system. The system takes surrounding air through an air compressor, and through a series of devices (cryocooler, vapor compression system, etc.), generates liquid nitrogen. For this project, I programmed a touchscreen logic controller for operating the devices via relays, analog signals, and serial communications. The system was monitored by routinely reading a variety of sensors for temperature, pressure, and mass flow. I also programmed data transmission from the controller to a computer for analyzing how the system operates over long periods of time in order improve its efficiency.

It was a wonderful experience learning how to collaborate on projects, solder, troubleshoot, program hardware, and write documentation.

### Space Scientists and Particle Physicists

Then summer of junior year, I was accepted at a Research Experience for Undergraduates (REU) program at University of Colorado, Boulder. This meant packing my bags to live in Boulder for 10 weeks.

![UC Boulder campus view from physics building]({{site.url}}/assets/img/2024/01/Boulder/Boulder.jpg)

The Boulder campus is beautiful. From my dorm, my commute to the lab I worked in consisted of a 10 minute bike ride along a scenic trail along a spring.

![Boulder bike trail]({{site.url}}/assets/img/2024/01/Boulder/Boulder-trail.jpg)

![Boulder deer]({{site.url}}/assets/img/2024/01/Boulder/Boulder2.jpg)

![Boulder deer outside of dorm]({{site.url}}/assets/img/2024/01/Boulder/Boulder3.jpg)

My summer research at UC Boulder was supported by the National Science Foundation. It was the result of an interesting collaboration. Space scientists in Boulder and particle physicists in Switzerland started working together when researchers at the European Council for Nuclear Research ([CERN](https://home.cern/)) reached out to the Institute for Modeling Plasma, Atmospheres, and Cosmic Dust ([IMPACT](https://impact.colorado.edu/about.html)) to test a theory. They suspected that the Large Hadron Collider was experiencing shutdowns due to electrostatic dust lofting. The synchrotron radiation generated when accelerated proton bunches travel through the collider could charge the dust inside it. The electric field generated between these protons and the grounded chamber walls could generate a force to pull these charged dust grains from the walls. This project involved running experiments in vacuum chambers and developing a script to extract data from recorded high-speed footage of these experiments.

The experiment setup shown below consisted of a high-speed camera positioned looking into a vacuum chamber. Inside the vacuum chamber was a grounded plate where dust would be deposited. About a centimeter above this is a metallic mesh that could have a potential difference of up to 3 kiloVolts between it and the grounded plate. Above the dust setup was a tungsten filament, that when a sufficient current was passed through it and heating voltage was across it, would send a beam of electrons down to the dust. We were interested in studying these two types of electrostatic dust lofting: (1) lofting due to charging via this electron beam, and (2) lofting due to high voltage when the beam was turned off and up to 3 kV was placed across the metallic mesh.

![electrostatic dust lofting experiment setup diagram]({{site.url}}/assets/img/2024/01/Boulder/exp-setup.png)

![photo of experiment setup]({{site.url}}/assets/img/2024/01/Boulder/chamber-setup.png)

Setting up the experiment involved learning how to work with vacuum chambers, and applying some of the skills I learned from a week-long machine shop training that UC Boulder provided. During the program, I learned how to work metal by sawing, drilling, tapping, and also how to use the lathe and mill.

We also ran some plasma diagnostics on the chamber using an emissive probe (pictured below) and a Langmuir probe.

![chamber with diagnostic probe]({{site.url}}/assets/img/2024/01/Boulder/chamber.jpg)

Alongside the data collection of setting up the experiment and varying our parameters of interest, I also developed a particle tracking script to process the resulting high-speed footage. The goal of this script was to detect lofted particles and calculate their upward velocity and acceleration. From this the electric charge on the dust grain could be calculated. By comparing the change of brightness in-between consecutive video frames, the script was able to detect movement. One of my first test results from the script is below.

![particle tracking script - initial test results]({{site.url}}/assets/img/2024/01/Boulder/tracking-script-first-test.gif)

Surprisingly, with the introduction of a tunable script parameter, it could detect multiple lofted particles at the same time, while also ignoring background noise. Unfortunately, it was still sensitive to brightness differences between videos, and so each video had to be processed individually rather than running them in batches.

I also developed a way to calculate the size of lofted particles using what's called a flood fill algorithm. If you have ever used the paintbucket tool on drawing software like Paint MS, then you have used a flood fill algorithm before. When you click a pixel with the paintbucket tool, it takes all the surrounding region that has that same color and changes it to a new color. I used and modified this algorithm to select for a *range of brightness values* instead of color to identify the lofted dust particle and calculate its diameter (usually 10-50 micrometers). A result of this is below, with the result of the flood fill colored yellow.

![script - flood fill algorithm]({{site.url}}/assets/img/2024/01/Boulder/flood-fill.png)

One of the differences between our two types of electrostatic dust lofting was the type of trajectory the dust grain traveled in. For the high voltage lofting, a strong vertical electric field was applied which caused the dust to travel vertically upward. However, for lofting due to charging, the charge build-up between dust grains would repel eachother, causing parabolic trajectories. For this type of lofting, I further developed the script to calculate the lofting angle.

![script - lofting angle calculation]({{site.url}}/assets/img/2024/01/Boulder/charging-script.gif)

These particle tracking scripts are available on [Github](https://github.com/amandalynnelliott/particle_tracking).

Our results were promising to indicate that the Large Hadron Collider was experiencing shutdowns due to electrostatic dust lofting. The goal of the project was then to characterize the paramaters that facilitate or inhibit dust lofting, with the long-term goal of dust mitigation at the collider. Throughout the project, I had the invaluable guidance from my advisors in Boulder, along with the insight provided by four CERN collaborators. It was an unsuspecting collaboration between space scientists and particle physicists.

<figure>
<img src="{{site.url}}/assets/img/2024/01/Boulder/Boulder-group-photo.jpg" alt="UC Boulder REU summer 2022 group photo">
<figcaption>
UC Boulder 2022 summer REU program group photo.
</figcaption>
</figure>

At the culmination of my contribution to this research, I presented at Florida Tech's Northrop Grumman Senior Showcase 2023 and won the awards for Best in Physics and Space Sciences, and Best in Science. We also presented a poster at the [International Particle Accelerator Conference](https://www.ipac23.org/) 2023 in Venice, Italy.

### Ball Lightning and Plasma Physics

During my senior year, I decided to indulge one of my more fringe research interests.

The realization that led to me switching my career from art to physics is that I am happiest when I focus on solving puzzles. The most interesting puzzle that I am working on is one that I have experienced firsthand. What I am about to describe is strange, but I ask that you have an open mind. The things that we consider strange are just things that are yet to be scientifically explained.

<figure>
<img src="{{site.url}}/assets/img/2024/01/BL/Pop-Guide_lightning-photo_cropped.png">
<figcaption>Source: H. Boerner. Ball Lightning: A Popular Guide to a Longstanding Mystery in Atmospheric Electricity. Springer, 2019.
</figcaption>
</figure>

One night when I was twelve, I was trying to fall asleep, but I noticed light that kept filling my room from my window. It was almost like cars were passing by, but the street I lived on was not a busy one, and so I found it odd.

I looked out the window, and saw over the woods in the lot across the street, an orb of white light moving horizontally in the sky. My eyes widened, and I thought, "What is that?" Just then it descended from the sky and came towards me. It was an orb of white light, the size of a soccer ball. It hovered outside my bedroom window a few feet off the ground. It moved horizontally. It would go down the street, outside of my line of sight, and then return. For about an hour it moved in a way that defied any explanation, even going between and around the tree branches of the oak tree in the front yard. It was accompanied by a buzzing or humming noise that made my head feel strange. I tried to drown this out by putting earphones in and listening to music. I spent half of this time hiding under the covers, trying to pretend that it wasn't there.

I went to school the next day as if nothing had happened, telling myself that, "I was either visited by aliens, or I am crazy."

I didn't tell anybody about the experience until junior year of high school. I confided in my friend, and he asked me, "How do you know that it wasn't a dream?" I said that it felt so real. I could vividly remember the type of MP3 player that I was using to drown out the humming, the one that I would later accidentally break due to water damage when I would forget it in my pocket during a field trip to a lagoon. I told him how I even remembered the song that I was playing over and over again, which was "Everlong" by Foo Fighters.

"Foo Fighters," he said. "That's interesting."

"Why is that," I responded.

Apparently, Foo Fighters were the name given by World War II pilots to describe the strange orbs of lights that they would see while flying. "Foo," being French for fire. They called these objects either fireballs or fire fighters.

It wasn't until high school that I discovered the name for the strange thing I witnessed: a rare weather phenomenon called ball lightning, so named because it tends to be observed during thunderstorms and near lightning strikes. Afterward, I was too scared to share the ordeal with anyone for years for fear of sounding crazy. I was surprised and relieved to learn that thousands of eyewitnesses had reported the same properties I had observed. This event has been a guiding force for my curiosity.

<figure>
<img src="{{site.url}}/assets/img/2024/01/BL/Richmann.png">
<figcaption>
Engraving of the ball lightning
caused death of Russian physicist Georg
Wilhelm Richmann in 1753 [Boerner,
2019]
</figcaption>
</figure>

My ball lightning experience has inspired and challenged me. It gives me the firsthand knowledge that there are many unsolved mysteries in the world and the conviction to consider unique perspectives when trying to solve them. Whenever I tell this story a wave of apprehension washes over me. Will they believe me, or will they think that I hallucinated? To witness something that should not exist was a challenging experience that changed me. I had two options to process it. Either I could accept that my perception is wrong and that I am crazy or accept that my understanding of reality is wrong. Either way, the discomfort will always be there in the back of my mind until it is resolved. This discomfort is the feeling of an unfinished puzzle.

Senior year of undergrad, I decided to explore this strange phenomena. I started research under advisement of a computational mathematician and a plasma physicist that specializes in solar wind.

<figure>
<img src="{{site.url}}/assets/img/2024/01/BL/BL_shell_Wu.PNG">
<figcaption>
H-C. Wu. Relativistic-Microwave Theory of Ball Lightning. Scientific Reports 6, 28263, 2016.
</figcaption>
</figure>

I came across Hui-Chun Wu's 2016 paper describing a potential theory for the creation of ball lightning at the end of lightning strikes. This theory involved relativistically accelerated electrons at the end of the lightning leader, that could lead to a type of radiation transmission that could ionize the air, forming a kind of stable, standing microwave, trapped by a plasma shell. Supporting the theory that ball lightning objects are hollow on the inside is that the most commonly reported ways that these objects terminate is either (1) violent termination in which the object comes in contact with something sharp, like edge of a table, causing it to explode with a loud burst of energy, or (2) peaceful termination in which it dissipates like a gas. These ways of termination are similar to how everyday soap bubbles tend to either pop or fade away. My goal was to replicate his simulation results and build on top of them.

The first thing I did was set up a plasma simulation software called [Smilei](https://smileipic.github.io/Smilei/), which is an open source particle-in-cell code.

One of the simple tutorials that can be run with the code is a laser incident on a column of plasma. This example is used to demonstrate the radiation pressure, or pondermotive force, that can allow for strong electric fields to induce a force on plasma. This effect depends on the number density (number of particles per volume) of the plasma, in relation to a defined critical number density. When the number density is much larger than the critical density, most of the laser energy is reflected by the plasma. When the number density is much less, the laser passes through the plasma as if it was transparent.

In-between these extremes, you can get the effect of moving plasma with electromagetic energy via the laser, like below.

![laser incident on plasma column]({{site.url}}/assets/img/2024/01/BL/electrons_and_Ex_Bx.gif)

In the time that I was working on this project, I was able to replicate the first of Wu's simulations that involved simulating the type of radiation that could develop at the end of a lightning leader, in the microwave range. I wasn't able to replicate the second simulation to trap this radiation into a stable circular shape. For my simulation, I was able to get the plasma bubble to form, but it never stabilized.

<figure>
<img src="{{site.url}}/assets/img/2024/01/BL/New_Ez.gif">
<figcaption>
Simulation 2 electric field input.
</figcaption>
</figure>

<figure>
<img src="{{site.url}}/assets/img/2024/01/BL/SHOWCASE_SPRING2023_VIDEO_MATH_BLSIM.gif">
<figcaption>
Simulation 2 plasma number density result. There is plasma shell formation, but it is not stable.
</figcaption>
</figure>

There are many physical effects that the simulation does not take into account, such as electron collisions with the air which occur at a rate that is much faster than the simulation time scale. It would also be interesting to consider the effect of vertical forces, such as gravity, and the upward convective force, to explain how ball lightning objects appear to hover at a stable distance from the ground.

What fascinates me about ball lightning, and what may be the key to understanding them, may lie in their stability. What parameters are key to determining the lifespan of these objects, which is usually observed to be seconds to minutes? Could it be an interplay between internal pressure and plasma shell surface tension, similar to that of everyday soap bubbles?

Elegant models and equations provide us with the predictive power to explain a variety of phenomena. The practice of physics requires a balance of approximating reality without oversimplifying it.

This is the challenge of developing theories. What physical effects do you include or exclude? The gravitational effect of Pluto certainly exists, but this is of course negligible. Determining what effects are important can only be accomplished through rigorous observation and experimentation, without which, theories can digress from reality. This is the challenge of ball lightning. It is so rare that it is difficult to obtain data directly from ball lightning objects. Until we understand the conditions under which it is created, we cannot predict where it will be created, or artifically create it. Lightning researchers in China were at the right place at the right time, and able to record the [spectrum of a ball lightning object in 2014](https://physics.aps.org/articles/v7/5). Other than this, information about these objects are limited to statistical analysis of eyewitness reports, which can be unreliable.

Describing the creation, stability, and termination of ball lightning is an outstanding physics problem. My project materials are available [here](http://www.bukshtynov.xyz/research_undergrad.html). I presented this research at Florida Tech's 2023 Northrop Grumman sponsored Senior Showcase and won Best in Mathematics. I also presented a poster for this research at the Florida Undergraduate Research Conference, St. Thomas University, Miami FL (February 17-18, 2023).

### Research Process and Graduate School

These undergraduate research projects gave me an appreciation for how professional research is done. It is highly collaborative, requires a lot of communication, and it usually takes much longer than you expect to make progress. Research projects are always a work-in-progress, but sharing results is nonetheless encouraged. Almost always, the research digresses in ways that you would never expect. I learned the importance of being flexible with schedules and plans. Encountering unexpected difficulties is not a sign of failure, but comes with the territory of trying to discover new things.

One thing I learned from these experiences is that I enjoy collaborating with people from a wide variety of fields. I find that consulting with people with different areas of expertise is enriching, and saves me time by preventing me from falling into traps.

Diversity and collaboration are necessary to push the boundaries of knowledge. The intersection of fields seems to be the most interesting source of discoveries because the cross-pollination of ideas is facilitated.

During senior year, I also applied to graduate schools. I was so busy that I ended up making most of my conference posters while on plane rides to visit the schools that I was accepted to.

<figure>
<img src="{{site.url}}/assets/img/2024/01/UtahState.jpg">
<figcaption>
A cafe by Utah State University
</figcaption>
</figure>

I was thrilled to accept the offer for the physics PhD program at the University of Rochester.

### Moving to Rochester

<figure>
<img src="{{site.url}}/assets/img/2024/01/UR_Fall.jpg">
<figcaption>
University of Rochester Rush Rhees Library
</figcaption>
</figure>

I am excited to be doing my graduate research at the [Labratory for Laser Energetics](https://www.lle.rochester.edu/). Given last year's [fusion ignition](https://www.llnl.gov/archive/news/lawrence-livermore-national-laboratory-achieves-fusion-ignition) achieved by Lawrence Livermore National Laboratory, this is an exciting time to be in laser and plasma physics.

One of the concepts that my research will concentrate on is a powerful way to control lasers called a flying focus: 
<figure>
<img src="{{site.url}}/assets/img/2024/01/AElliott_N2Y_Flying-Focus.jpg">
<figcaption>
Source: <a href="https://phys.org/news/2018-11-focus-lasers-space.html">Phys.org</a>
</figcaption>
</figure>

For the first year of my program, I am focusing on coursework and teaching undergraduate physics labs. Though, I am thrilled to continue research this summer.

I am grateful for all of the research opportunities that I have had and continue to contribute to. My hope for my graduate studies and career is to continue working with diverse groups of scientifically minded people to further humanity’s understanding of reality by solving its outstanding puzzles.