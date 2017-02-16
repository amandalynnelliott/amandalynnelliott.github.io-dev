---
layout: post
title: "Making this Website"
categories: announcements
tags: website, dev
author: "Amanda Lynn Elliott"
permalink: /2017/02/making-website/
excerpt_separator: <!--more-->
---

Taking two months to complete, building and designing this website has been an educational and rewarding process. Here's how I got it done.

<em>Similarly, read <a href="{{site.baseurl}}/blog/2017/01/new-beacon/"><b>New Beacon</b></a> to see my purpose with blogging.</em>

Here are the reasons that made getting this website up and running more urgent:
<ul>
<li><b>I'm bursting at the seams with content that needs to be shared.</b> I compulsively write blog posts that average 2,000 words in length, and come up with supporting illustrations and graphic concepts. I have a backlog of 35 new and partially fleshed out posts… I wish I was exaggerating!</li>
<li><b>I want to focus on completing the biggest project I've undertaken to date</b>, the <em>Lion Poem Animation</em>, but I have no place to chronical my works-in-progress and learning, let alone a place to share the finished project (except the brevity of YouTube).</li>
<li><b>Accountability</b>: I want to finish what I start. Sharing goals publically adds some needed social pressure.</li>
<li><b>Experiments</b>: I don't want to <em>only</em> leave a string of finished projects in my wake, but <em>also</em> behind-the-scenes and lessons learned from making them. I change things up frequently, lately oscillating between researching, writing, drawing, web development, and playing the ukulele, and I've been letting this playful and experimental nature lead my work. The results are rarely uninteresting.</li>
</ul>

Now, let's get into the logistics, the What and How of making the site.
<!--more-->


### Why build my own, and why not something simpler?

<em>… like Squarespace? Tumblr? Weebly? Wix?</em>

There are many simple solutions out there that are wonderful. I've tried most of the popular ones, always reaching the same conclusion: 

<em>I want more control than these solutions provide.</em>

Having worked on websites for a few years, I never had the satisfaction of building a <em>decent and professional-looking</em> website from scratch. I've always modified existing templates, even to the point of barely resembling what the author had originally intended. This of course is <em>not good practice…</em> It makes for bloated and sloppy work, and is a monster to maintain. 

Part of this website is redemption. I've called myself, and even made money as, a web designer for a few years, but I never felt confident in the skill. My design sense greatly surpasses my ability to execute in code. It was time to tackle the elephant in the room that I had been running away from for so long: programming! 


### Programming Beyond the Website

<em>The possibilities will blow your mind.</em>

Months before I decided on the website project, I became inspired by the form on online content called <b>microsites</b>. Microsites are just what the name implies, smaller websites created for a single laser-focused goal. 

<em>As an example, take a second to view the beautiful experience that has rocked my world: <a href="http://www.sbs.com.au/theboat/"><b>The Boat</b></a>. It details the story of a mother and son on a dangerous journey.</em>

The story is based on a book, and if the project was led by more traditional minds, then the only other format it likely would have been told in is as a graphic novel. 

But what happens when you take those illustrations, put them on a web page, and make them dynamically respond to user input? On the website, the story progresses as you scroll, images fade in or out, the music gets more dramatic or calm, you trigger sound effects The effect is that the story is exponentially more engaging. 

The possibilities that arise when I consider adding <em>user interactivity</em> to my content tickles me pink. 

Now the blog becomes more than a place to store written text, but a dynamic home base from which to branch off with microsites I create. It becomes a place to share experiments from the world of web development and animation.

Isn't that exciting?

<em>The case for control was further strengthened. Naturally, the more control you want, the more complex the solution is. I've come to terms with this and finally started teaching myself programming.</em>


### Self-Education for Web Developers

To get my feet wet, I first embarked on Udacity's <a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"><b>Front-End Web Developer</b></a> curriculum. The courses are free to take, though you can pay if you want a credential.

In a couple months, I completed the following:
<ul>
<li><a href="https://www.udacity.com/course/javascript-basics--ud804">JavaScript Basics</a></li>
<li><a href="https://www.udacity.com/course/intro-to-jquery--ud245">Intro to jQuery</a></li>
<li><a href="https://www.udacity.com/course/html5-canvas--ud292">HTML5 Canvas</a></li>
</ul>

There still is much left to learn in the program, but this was a good stopping point in order to code a website. 

Also tremendously helpful has been the <a href="https://www.youtube.com/user/DevTipsForDesigners"><b>DevTips YouTube channel</b></a>. I have so much respect for the creator, Travis Neilson. His videos have great energy and balance information and humor well. It's also inspiring how each of his "blog posts" are actually beautiful standalone webpage designs in it of themselves.


### Why I dumped WordPress for Jekyll

I have a decent amount of experience with WordPress, and it's what I used for my Cheating College website. It is the most used CMS, <em>Content Management System</em>, for blogging, so you know it's good!

I didn't even consider using anything different until I came across <a href="https://www.youtube.com/playlist?list=PLqGj3iMvMa4KQZUkRjfwMmTq_f1fbxerI">DevTips responsive website tutorial series</a> and was introduced to the wonders of the static site generator Jekyll.

Here's how Jekyll broke WordPress' heart:
<ul>
<li>Making the switch means I don't have pay for hosting. This reason was big! Website hosting is about $100/year, but with Jekyll, hosting is free through GitHub Pages. Score!</li>
<li>Through GitHub you also have version control: If a change you make accidentally breaks the site, you can easily revert to the version before the change.</li>
<li>Don't have to deal with a database. Since this is just a personal site, not a forum or online store where people can sign in, having a database just to contain my content seems unnecessary.</li> 
<li>Don't have to defend said database against malacious software. Even with my modest Cheating College blog, this consumed an unnecessary amount of time.</li> 
<li>WordPress is built on PHP. <em>Having experience working with it, I must say, PHP is not a fun language to work in.</em> On the other hand, Jekyll templating is done with Liquid, a language that is actually build for templating; how useful!</li> 
<li>A great amount of control is available through both WordPress and Jekyll, but I find Jekyll easier to learn and easier to make wide-sweeping changes with. Jekyll is more suited for small-scale use, while WordPress being more suited for larger and more established websites.</li>
</ul>

When I accumulate more content, I foresee myself graduating to WordPress in the future, but currently I want to keep things tiny, lean, and manageable. Jekyll is a great and agile way to experiment with development.


Now to get into the specific goals of the site. 


### The Best Design is Invisible

Amid all the flashy color choices, display fonts, and gradients, I'm going to go on a limb here and say that the best design is invisible. It's that uninterrupted flow of user action: When you sign up on a website and nothing out of the ordinary happens. Nothing good or bad really stood out. You went in, accomplished what you wanted to, and then went about your business. 

Back when I was looking to start as an illustrator, I would go about setting up a website, but then get paralyzed in the quest for the perfect header and banner design. Which illustration should I use? What colors represent me?

Years ago my guiding thoughts were about my “brand” and how to stand out and dazzle the viewer… <em>The resulting indecisiveness often led to no website being made at all.</em>

This time my goal was refreshingly the opposite: make the design invisible. Allow it to fade into the background so my content can take center stage. <em>My goal was to minimize distractions in order to allow the content to speak for itself.</em>

Invisibility as a design goal is reflected in this final product. No banner image, just my name. Even when I got stuck on a main color to use, I cut the nonsense and went with a palette of grays. 

<p class="sidenote">Is having a red website because I'm a redhead really that clever?</p>

Keeping the colors of the website black, white, and grays might sound boring, but it fits perfectly because even when drawing, I predominantly work in black and white. Keeping the website consistent with that feels right. Also, when I would make images for Cheating College, I felt restricted to the orange color scheme I had chosen for the brand. But now with a black and white canvas that guarantees no clashing, I can share work that has any color palette under the sun.

Having liberated myself to allow what's unimportant be invisible, I was able to devote more time to the readability of the site. Most of my time designing was actually spent picking the right fonts, making sure paragraphs read well, along with headers, lists, and blockquotes. <em>My top priority was making reading the content a comfortable experience.</em>

I expanded on my knowledge of typography by reading this beautiful guide: <a href="http://practicaltypography.com/"><b>Butterick's Practical Typography</b></a>

I even added a custom side note element for use when I venture down a bit of a tangent while writing a post, which happens often!

<p class="sidenote">[[ Insert unrelated tangent here. ]] Side notes are so useful!</p>

Once the blog post read well, most of the design work was already done.


### Unexpected Collaboration

<em>We make better together.</em>

While working on this project, my boyfriend, Davis, has been supportive. In the pursuit of his own passions, he's been teaching himself programming for over a year, and has even started teaching me as well.

Before he brought it up, I hadn't even considered the possibility  of him working with me on the website. 

<em>Now I have a caveat, I believe when doing projects it's important to intend to complete them, even if you have to do it 100% alone. It's crucial not to get hung up on the contributions of others, something that is so out of your control and subject to change.</em> 

But I also must say, a part of me, my ego, was excited about being able to say, "I made this entire site by myself!" I had to step back and realize that Davis' contribution was a wonderful opportunity to complete the project faster than I would working on it alone, and if I wanted that, then I had to let go of some control. I had to give Davis the breathing room to use his strength to make the project better.

I am so glad I did, because we were able to get the bunk of the project done in just a month! He focuses on development, I focus on design, and that way we make a wonderful team. Thanks to the work I've done in learning programming, I can understand his contribution and appreciate it more.


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

For simplicity's sake, this version is text-based and mostly barren of my artistic personality. This website is something that I will grow with, and once I have more content and projects completed, I'll start working on a more picture-based design to display the kind of work I do. 

Things to look forward to: 
<ul>
<li>custom projects section</li>
<li>custom home page</li>
<li><em>Cheating College</em> posts archive </li>
</ul>

For an update further in the future, I could add the functionality so readers could specify the topics they want to subscribe to: Maybe you're only interested in my thoughts on creativity and productivity, but not about relationships. <em>I could segment the subscriber list based on interests.</em>

I also foresee myself creating separate email opt-ins for specific project updates.

Then comes of the issue of <em>type</em> of content. The example: If somebody isn't as interested in my writing as they are in my animations. Categorizing by type seems like a less desirable way than categorizing by interest. To most people, content is content, no matter the form. 

However, I am playing with the idea of being able to filter by type. I want to add that functionality to the search bar, and am considering adding links to the navigation bar as well. Though, I am keeping in mind: <em>I want to prevent this site from becoming a static portfolio page for old work so that it can remain a value-adding blog.</em> 

There are lots of things to consider for future updates, but for now, let's get cozy with what we have. :)

<em>I'm excited to pause website development and focus on the reason I did all that work: So I can start getting all of my content out of my head and into yours!</em>