---
layout: post
title: "Making this Website"
categories: announcements
tags: website, dev
author: "Amanda Lynn Elliott"
permalink: /draft1/
excerpt_separator: <!--more-->
---

I decided to tackle the untertaking of making a new website for me to share content, in addition to the reasons I described in <a href="{{site.baseurl}}/blog/2017/01/new-beacon/">New Beacon</a>, because of these as well:
<ul>
<li>I'm bursting at the seams with content that needs to be shared. I compulsively write blog posts that average 2,000 words in length, and come up with supporting illustrations and graphic concepts. I have a backlog of 35 new and partially fleshed out posts… I wish I was exaggerating!</li>
<li>I want to focus on completing the biggest project I've undertaken to date, the Lion Poem Animation, but I have no place to chronical my works-in-progress and learning, let alone a place to share the finished project (except the brevity of YouTube).</li>
<li>Accountability: I want to finish what I start. Sharing goals publically adds some needed social pressure.</li>
<li>Experiments: I don't want to <em>only</em> leave a string of finished projects in my wake, but <em>also</em> behind-the-scenes and lessons learned from making them. I change things up frequently, lately oscillating between researching, writing, drawing, web development, and playing the ukulele, and I've been letting this playful and experimental nature lead my work. The results are rarely uninteresting.</li>
</ul>

Now, let's get into the logistics, the What and How of making the site.
<!--more-->


### Why build my own, and why not something simplier, like Squarespace? Tumblr? Weebly? Wix?

There are many simple solutions out there that are wonderful. I've tried most of the popular ones, always reaching the same conlusion: 

I want more control than these solutions provide. 

Having worked on websites for a few years, I never had the satisfaction of building a <em>decent and professional-looking</em> website from scratch. I've always modified existing templates, even to the point of barely resembling what the author had originally intended. This of course is <em>not good practice…</em> It makes for bloated and sloppy work, and is a monster to maintain. 

Part of this website is redemption. I've called myself, and even made money as, a web designer for a few years, but I never felt confident in the skill. My design sense greatly surpasses my ability to execute in code. It was time to tackle the elephant in the room that I had been running away from for so long: programming! 


### Programming Beyond the Website: the Possibilites will Blow your Mind

Months before I decided on the website project, I became inspired by the form on online content called MICROSITES. Microsites are just what the name implies, smaller websites created for a single laser-focused goal. 

<em>As an example, take a second to view the beautiful experience that is has rocked my world, <a href="http://www.sbs.com.au/theboat/">The Boat</a>. It details the story of a mother and son, refuges on a dangerous journey.</em>

The story is based on a book, and if the project was led by more tranditional minds, then the only other format it likely would have been told in a graphic novel. 

But what happens when you take those illustrations, put them on a web page, and make them dynamically respond to user input? On the website, the story progresses as you scroll, images fade in or out, the music gets more dramtic or calm, you trigger sound effects The effect is that the story is expontentially more engaging. 

The possibilities that arise when I consider adding <em>user interactivity</em> to my content, tickles me pink. 

Now the blog becomes more than a place to store written text, but a dynamic homebase from which to branch off with microsites I create. it becomes a place to share experiments from the world of web development and animation.

Isn't that exciting?

The case for control was further strengthed. Naturally, the more control you want, the more complex the solution is. I've had to come to terms with this and start teaching myself programming.


### Self-Education for Web Developers

To get my feet wet, I first embarked on Udacity's <a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001">Front-End Web Developer's curriculum</a>. The courses are free to take, though you can pay if you want a credential.

In a couple months, I completed the following:
<ul>
<li><a href="https://www.udacity.com/course/javascript-basics--ud804">JavaScript Basics</a></li>
<li><a href="https://www.udacity.com/course/intro-to-jquery--ud245">Intro to jQuery</a></li>
<li><a href="https://www.udacity.com/course/html5-canvas--ud292">HTML5 Canvas</a></li>
</ul>

There still is much left to learn in the program, but this was a good stopping point in order to code a website. 

Also tremendously helpful has been the <a href="https://www.youtube.com/user/DevTipsForDesigners">DevTips YouTube channel</a>. I have so much respect for the creator, Travis Neilson. His videos have great energy and balance information and humor well. It's also inspiring how each of his "blog posts" are actually beautiful standalone webpage designs in it of themselves.


### Why I dumped WordPress for Jekyll

I have a decent amount of experience with WordPress, and it's what I used for my Cheating College website. It is the most used CMS (Content Management System) for blogging, so you know it's good!

I didn't even consider using anything different until I came across <a href="https://www.youtube.com/playlist?list=PLqGj3iMvMa4KQZUkRjfwMmTq_f1fbxerI">DevTip's responsive website tutorial series</a> and was introduced to the wonders of the static site generator, Jekyll.

Here's how Jekyll broke WordPress' heart:
<ul>
<li>Making the switch means I don't have pay for hosting. This reason was big! Website hosting is about $100/year, but with Jekyll, hosting is free through Github Pages. Score!</li>
<li>Through GitHub you also have version control: If a change you make accidentally breaks the site, you can easily revert to the version before the change.</li>
<li>Don't have to deal with a database. Since this is just a personal site, not a forum or online store where people can sign in, having a databse just to contain my content seems unneccessary.</li> 
<li>Don't have to defend said database against malacious software. Even with my modest Cheating College blog, this consumed an unnecessary amount of time.</li> 
<li>WordPress is built on PHP. Having done some theme creating with it, I must say, PHP is not a fun language to work in. At least not compared to JavaScript ;P. On the other hand, Jekyll templating is done with Liquid, a language that is actually build for templating; how useful!</li> 
<li>A great amount of control is available through both WordPress and Jekyll, but I find Jekyll easier to learn and easier to make wide-sweeping changes with. Jekyll is more suited for small-scale use, while WordPress being more suited for larger and more established websites.</li>
</ul>

When I accumulate more content, I forsee myself graduating to WordPress in the future, but currently I want to keep things tiny, lean, and managible. Jekyll is a great and agile way to experiement with development.


Now to get into the specific goals of the site. 


### The Best Design is Invisible

Amid all the flashy color choices, display fonts, and gradients, I'm going to go on a limb here and say that the best design is invisible. It's that uninterrupted flow of user action: like when you sign up on a website and nothing out of the ordinary happens. Nothing good or bad really stood out. You went in, accomplished what you wanted to, then went about your business. 

Back when I was looking to start as an illustrator, I would go about setting up a website, but then get paralyzed in the quest for the perfect header abd banner design. Which illustration should I use? What colors represent me?

Years ago my guiding thoughts were about my “brand,” and how to stand out and dazzle the viewer… The resulting indesiveness often led to no website being made at all.

This time my goal was refreshingly the opposite: make the design invisible. Allow it to fade into the background so my content can take center stage. My goal was to minimize distractions in order to allow the content to speak for itself.

Invisibilty as a design goal is reflected in this final product. No banner image, just my name. Even when I got stuck on a main color to use (Is using red because I'm a redhead really that clever?), I cut the nonsense and went with a palette of greys. 

Keeping the colors of the website black, white, and grays might sound boring, but it fits perfectly because even when drawing, I predominantely work in black and white. Keeping the website consistent with that feels right. Also, when I would make images for Cheating College, I felt restricted to the orange color scheme I had chosen for the brand. But now with black and white, I can share work that has any color palette under the sun, and it won't clash with the website at all.

Having liberated myself to allow what's unimportant be invisible, I was able to devote more time to the readability of the site. Most of my time designing was actually spent picking the right font, making sure paragraphs read well, along with headers, lists, blockquotes, and I even added a sidenote element for use when I venture down a bit of a tangent while writing a post, which happens often!

<p class="sidenote">[[ Insert unrelated tangent here. ]] Sidenotes are so useful!</p>

Once the blog post read well, most of the design work was already done.


### Unexpected Collaboration: We make better together

While working on this project, my boyfriend, Davis, has been supportive. In the pursuit of his own passions, he's been teaching himself programming for over a year, and has even been teaching me as well.

Before he brought it up, I hadn't even considered the possbility of him working with me on the website. 

Now I have a caveat, I believe when doing projects it's important to intend to complete them, even if you have to do it 100% alone. It's crucial not to get hung up on the contributions of others, something that is so out of your control and subject to change. 

But I also must say, a part of me, my ego, was excited about being able to say, "I made this entire site by myself!" I had to step back and realize that Davis' contribution was a wonderful oppotunity to complete the project faster than I would working on it alone, and if I wanted that, then I had to let go of some control. I had to give Davis the breathing room to use his strength to make the project better.

I am so glad I did, because we were able to get the bunk of the project done in just a month! He focuses on development, I focus on design, and that way we make a wonderful team. Thanks to the work I've done in starting to teach myself programming, I can understand his contribution and appreciate it more.


### Tools Lineup

Why reinvent the wheel? Here are some other tools used to get this bad boy up and running:
<ul>
<li><a href="https://jekyllrb.com/">Jekyll</a> - static site generator</li>
<li><a href="http://brackets.io/">Brackets</a> - my beautiful and minimal code editor of choice. Open source, and ideal for web dev.</li>
<li><a href="https://www.visualstudio.com/vs/">Microsoft Visual Studio</a> - Davis' code editor of choice.</li>
<li><a href="https://trello.com/">Trello</a> - project management</li>
<li><a href="https://mailchimp.com/">MailChimp</a> - newsletter signup. Free up to 2,000 subscribers.</li>
<li><a href="http://lunrjs.com/">Lunr.js</a> - search functionality</li>
</ul>


### Version 2: What to expect

For simplicity's sake, this version is text-based and mostly baren of personality. This website is something that I will grow with, and once I have more content and projects completed, then I'll start working on a more picture-based design to display the kind of work I do. 

Things to look forward to are a custom projects section, custom home page, and not to mention a Cheating College archive full of all that content!

Longterm, I'm also considering the idea of allowing readers to only subscribe to certain kinds of content: Maybe you're only interested in my thoughts on creativity and productivity. I could segement the subscriber list based on interest.
I also will likely add additional opt-ins for specific project updates.

There are lots of things to consider for future updates, but for now, let's get cozy with what we have. :)

<em>I'm excited to pause website development and focus on the reason I did all that work: So I can start getting all of my content from my head and to you!</em>