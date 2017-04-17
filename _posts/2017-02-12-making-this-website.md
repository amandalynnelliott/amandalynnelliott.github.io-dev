---
layout: post
title: "Making this Website"
categories: personal-dev mastery
tags: website web-dev
author: "Amanda Lynn Elliott"
permalink: /blog/2017/02/making-website/
excerpt_separator: <!--more-->
---

Taking two months to complete, building and designing this website has been an educational and rewarding process. Here's how I got it done.

*Similarly, read [**New Beacon**]({{site.url}}/blog/2017/01/new-beacon/") to see my purpose with blogging.*

Here are the reasons that made getting this website up and running more urgent:

- **I'm bursting at the seams with content that needs to be shared.** I compulsively write blog posts that average 2,000 words in length, and come up with supporting illustrations and graphic concepts. I have a backlog of over thirty new and partially fleshed out posts… I wish I was exaggerating!
- **I want to focus on completing the biggest project I've undertaken to date**, the *Lion Poem Animation*, but I have no place to chronical my works-in-progress and learning, let alone a place to share the finished project (except the brevity of YouTube).
- **Accountability**: I want to finish what I start. Sharing goals publically adds some needed social pressure.
- **Experiments**: I don't want to *only* leave a string of finished projects in my wake, but *also* behind-the-scenes and lessons learned from making them. I change things up frequently, lately oscillating between researching, writing, drawing, web development, and playing the ukulele, and I've been letting this playful and experimental nature lead my work. The results are rarely uninteresting.


Now, let's get into the logistics, the What and How of making the site.
<!--more-->


### Why build my own, and why not something simpler?

*… like Squarespace? Tumblr? Weebly? Wix?*

There are many simple solutions out there that are wonderful. I've tried most of the popular ones, always reaching the same conclusion: 

*I want more control than these solutions provide.*

Having worked on websites for a few years, I never had the satisfaction of building a *decent and professional-looking* website from scratch. I've always modified existing templates, even to the point of barely resembling what the author had originally intended. This of course is *not good practice…* It makes for bloated and sloppy work, and is a monster to maintain. 

Part of this website is redemption. I've called myself, and even made money as, a web designer for a few years, but I never felt confident in the skill. My design sense greatly surpasses my ability to execute in code. It was time to tackle the elephant in the room that I had been running away from for so long: programming! 


### Programming Beyond the Website

*The possibilities will blow your mind.*

Months before I decided on the website project, I became inspired by the form on online content called **microsites**. Microsites are just what the name implies, smaller websites created for a single laser-focused goal. 

*As an example, take a second to view the beautiful experience that has rocked my world: [**The Boat**](http://www.sbs.com.au/theboat/). It details the story of a mother and son on a dangerous journey.*

The story is based on a book, and if the project was led by more traditional minds, then the only other format it likely would have been told in is as a graphic novel. 

But what happens when you take those illustrations, put them on a web page, and make them dynamically respond to user input? On the website, the story progresses as you scroll, images fade in or out, the music gets more dramatic or calm, you trigger sound effects The effect is that the story is exponentially more engaging. 

The possibilities that arise when I consider adding *user interactivity* to my content tickles me pink. 

Now the blog becomes more than a place to store written text, but a dynamic home base from which to branch off with microsites I create. It becomes a place to share experiments from the world of web development and animation.

Isn't that exciting?

*The case for control was further strengthened. Naturally, the more control you want, the more complex the solution is. I've come to terms with this and finally started teaching myself programming.*


### Self-Education for Web Developers

To get my feet wet, I first embarked on Udacity's <a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001">Front-End Web Developer</a> curriculum. The courses are free to take, though you can pay if you want a credential.

In a couple months, I completed the following:

- [JavaScript Basics](https://www.udacity.com/course/javascript-basics--ud804)
- [Intro to jQuery](https://www.udacity.com/course/intro-to-jquery--ud245)
- [HTML5 Canvas](https://www.udacity.com/course/html5-canvas--ud292)


There still is much left to learn in the program, but this was a good stopping point in order to code a website. 

Also tremendously helpful has been the [DevTips YouTube](https://www.youtube.com/user/DevTipsForDesigners) channel. I have so much respect for the creator, Travis Neilson. His videos have great energy and balance information and humor well. It's also inspiring how each of his "blog posts" are actually beautiful standalone webpage designs in it of themselves.


### Why I dumped WordPress for Jekyll

I have a decent amount of experience with WordPress, and it's what I used for my Cheating College website. It is the most used CMS, *Content Management System*, for blogging, so you know it's good!

I didn't even consider using anything different until I came across [DevTips responsive website tutorial series](https://www.youtube.com/playlist?list=PLqGj3iMvMa4KQZUkRjfwMmTq_f1fbxerI) and was introduced to the wonders of the static site generator Jekyll.

Here's how Jekyll broke WordPress' heart:

- Making the switch means I don't have pay for hosting. This reason was big! Website hosting is about $100/year, but with Jekyll, hosting is free through GitHub Pages. Score!
- Through GitHub you also have version control: If a change you make accidentally breaks the site, you can easily revert to the version before the change.
- Don't have to deal with a database. Since this is just a personal site, not a forum or online store where people can sign in, having a database just to contain my content seems unnecessary.
- Don't have to defend said database against malacious software. Even with my modest Cheating College blog, this consumed an unnecessary amount of time.
- WordPress is built on PHP. *Having experience working with it, I must say, PHP is not a fun language to work in.* On the other hand, Jekyll templating is done with Liquid, a language that is actually build for templating; how useful!
- A great amount of control is available through both WordPress and Jekyll, but I find Jekyll easier to learn and easier to make wide-sweeping changes with. Jekyll is more suited for small-scale use, while WordPress being more suited for larger and more established websites.


When I accumulate more content, I foresee myself graduating to WordPress in the future, but currently I want to keep things tiny, lean, and manageable. Jekyll is a great and agile way to experiment with development.


Now to get into the specific goals of the site. 


### The Best Design is Invisible

Amid all the flashy color choices, display fonts, and gradients, I'm going to go on a limb here and say that the best design is invisible. It's that uninterrupted flow of user action: When you sign up on a website and nothing out of the ordinary happens. Nothing good or bad really stood out. You went in, accomplished what you wanted to, and then went about your business. 

Back when I was looking to start as an illustrator, I would go about setting up a website, but then get paralyzed in the quest for the perfect header and banner design. Which illustration should I use? What colors represent me?

Years ago my guiding thoughts were about my “brand” and how to stand out and dazzle the viewer… *The resulting indecisiveness often led to no website being made at all.*

This time my goal was refreshingly the opposite: make the design invisible. Allow it to fade into the background so my content can take center stage. *My goal was to minimize distractions in order to allow the content to speak for itself.*

Invisibility as a design goal is reflected in this final product. No banner image, just my name. Even when I got stuck on a main color to use, I cut the nonsense and went with a palette of grays. 

<p class="sidenote">Is having a red website because I'm a redhead really that clever?</p>

Keeping the colors of the website black, white, and grays might sound boring, but it fits perfectly because even when drawing, I predominantly work in black and white. Keeping the website consistent with that feels right. Also, when I would make images for Cheating College, I felt restricted to the orange color scheme I had chosen for the brand. But now with a black and white canvas that guarantees no clashing, I can share work that has any color palette under the sun.

Having liberated myself to allow what's unimportant be invisible, I was able to devote more time to the readability of the site. Most of my time designing was actually spent picking the right fonts, making sure paragraphs read well, along with headers, lists, and blockquotes. *My top priority was making reading the content a comfortable experience.*

I expanded on my knowledge of typography by reading this beautiful guide: [Butterick's Practical Typography](http://practicaltypography.com/).

I even added a custom side note element for use when I venture down a bit of a tangent while writing a post, which happens often!

<p class="sidenote">[[ Insert unrelated tangent here. ]] Side notes are so useful!</p>

Once the blog post read well, most of the design work was already done.


### Unexpected Collaboration

*We make better together.*

While working on this project, my boyfriend, Davis, has been supportive. In the pursuit of his own passions, he's been teaching himself programming for over a year, and has even started teaching me as well.

Before he brought it up, I hadn't even considered the possibility  of him working with me on the website. 

*Now I have a caveat, I believe when doing projects it's important to intend to complete them, even if you have to do it 100% alone. It's crucial not to get hung up on the contributions of others, something that is so out of your control and subject to change.* 

But I also must say, a part of me, my ego, was excited about being able to say, "I made this entire site by myself!" I had to step back and realize that Davis' contribution was a wonderful opportunity to complete the project faster than I would working on it alone, and if I wanted that, then I had to let go of some control. I had to give Davis the breathing room to use his strength to make the project better.

I am so glad I did, because we were able to get the bunk of the project done in just a month! He focuses on development, I focus on design, and that way we make a wonderful team. Thanks to the work I've done in learning programming, I can understand his contribution and appreciate it more.


### Tools Lineup

Why reinvent the wheel? Here are some other tools used to get this bad boy up and running:

- [Jekyll](https://jekyllrb.com/) - static site generator
- [Brackets](http://brackets.io/) - my beautiful and minimal code editor of choice. Open source, and ideal for web dev.
- [Microsoft Visual Studio Code](https://www.visualstudio.com/vs/) - Davis' code editor of choice.
- [Trello](https://trello.com/) - project management
- [MailChimp](https://mailchimp.com/) - newsletter signup. Free up to 2,000 subscribers.
- [Lunr.js](http://lunrjs.com/) - search functionality



### Version 2: What to expect

For simplicity's sake, this version is text-based and mostly barren of my artistic personality. This website is something that I will grow with, and once I have more content and projects completed, I'll start working on a more picture-based design to display the kind of work I do. 

Things to look forward to: 

- custom projects section
- custom home page
- *Cheating College* posts archive

For an update further in the future, I could add the functionality so readers could specify the topics they want to subscribe to: Maybe you're only interested in my thoughts on creativity and productivity, but not about relationships. *I could segment the subscriber list based on interests.*

I also foresee myself creating separate email opt-ins for specific project updates.

Then comes of the issue of *type* of content. The example: If somebody isn't as interested in my writing as they are in my animations. Categorizing by type seems like a less desirable way than categorizing by interest. To most people, content is content, no matter the form. 

However, I am playing with the idea of being able to filter by type. I want to add that functionality to the search bar, and am considering adding links to the navigation bar as well. Though, I am keeping in mind: *I want to prevent this site from becoming a static portfolio page for old work so that it can remain a value-adding blog.* 

There are lots of things to consider for future updates, but for now, let's get cozy with what we have. :)

*I'm excited to pause website development and focus on the reason I did all that work: So I can start getting all of my content out of my head and into yours!*