readme file
---

To add
- branding
--- fonts
--- colors
- google analytics

# AmandaLynnElliott's blog theme

A Jekyll-generated minimial blog website. The focus is less on design, more on content and readability. Equipped with RSS Mailchimp email subscription.

## Getting Started

1. [Ruby install](https://www.ruby-lang.org/en/)
2. [Git install](https://git-scm.com/)
3. `gem install jekyll bundler`
4. `git clone https://github.com/amandalynnelliott/amandalynnelliott.github.io.git`
5. `cd amandalynnelliott.github.io`
6. `bundle exec jekyll serve`

## Contents At-A-Glance

This theme was built up from the Jekyll theme [`minima`](https://github.com/jekyll/minima). 

### Layouts

Refers to the `_layouts` directory and determines much of the website structure. Adding a new layout is like adding a new page type, and is done by adding the file to the directory, and linking to it in the `layout:` property in the FrontMatter of the doc.

- `default.html` --- The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents in this file at the line that says `{{ content }}` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
- `page.html` --- The layout for documents that contain FrontMatter, but are not posts.
- `post.html` --- The layout for posts. Has post-footer for "Read related articles" list, and arrows linking to  
- `posts.html` --- Currently acting as home page, develops a list of post excerpts and "read more" links ordered by most-recent to oldest. 

To be added:
- `right-sidebar.html` --- An option for a page to have a sidebar on desktop view.
- `home.html` --- The layout for home-page/ index-page.

### Adding Pages

Refers to the `_pages` directory, including the following FrontMatter.

- `layout`
- `title`
- optional: `permalink`

### Includes

Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well).

- `embed-*.html`--- Embeds responsive YouTube or Vimeo videos, requiring the video ID as a variable. 
- `footer-col.html` --- Potential footer design with three columns. Not currently in use.
- `footer.html` --- Defines site's footer section.
- `google-analytics.html` --- Inserts Google Analytics module (active only in production environment). For future use.
- `head.html` --- Code-block that defines `<head></head>` in *default* layout. 
- `header.html` --- Defines the site's main header section, including the navigation bar. 
- `lightbox.html` --- **Needs work.** The same functionality as `modal-image.html` except it only applies when called by a specific element, and is for a gallery of images. 
- `mailchimp.html` --- MailChimp subscribe form. 
- `modal-image.html` --- By default for all images inside *Posts*, adds the functionality for user to click images, making it enlarge infront of dark backgorund and displaying it's alt text. Won't apply to images with the class `ignore-modal`.

### Sass

Refers to the `.scss` files within the `_sass` directory that defines the theme's styles.

Therein, is a `ours.scss` file that does the following
- Imports fonts
- Defines variables used throughout scss files.
	- base font family, size, weight, and line-height
	- spacing unit --- used for layouts
	- colors 
	- content widths based on screen-size
	- import files from the `_ours` directory

 Files in the `ours` directory. **This directory might not need to exist.**

 - `_base.scss` --- Styles that apply throughout the site and serve as a consistent foundation. 
 - `_footer.scss` --- For `_includes/footer.html`. 
 - `_header.scss` --- For `_includes/header.html`.
 - `_pages.scss` --- Styles for specific pages.
 - `_posts.scss` --- For `_layouts/posts.html` and `_layoutspost.html`.
 - `_syntax-highlighting.scss` --- **To be applied or discarded.** 

### Assets

Refers to various asset files within the `assets` directory. Contains `main.scss` that imports files from within the `_sass` directory. This `main.scss` is what gets processed into the theme's main stylesheet `main.css` called by `_layouts/default.html` via `_includes/head.html`. 

This directory can include sub-directories to manage assets of similar type, and will be copied over as is, to the final transformed site directory. 

### Images

Organized in folders by type if used in multiple pages and posts. 

- `cc` --- Cheating College images
- `me` --- Pictures of me

Otherwise for posts, organized in folders by year and month, like the structure for the markdown files in the `_posts` directory. 

### JavaScript

- `jquery-3.1.1.min.js` 
- `lunr.min.js` --- For search functionality.
- `search.js`
- `slideshow.js` --- For fading image [slideshows](#slideshow). Mostly reserved for pages instead of blog posts because it can be distracting. 

## Content

### Categories and Tags

Posts can have multiple categories separated by spaces, but make it a rare occurance.

It's important to keep categories and tags minimal and organized so post organizion doesn't become bloated. 

Category links are self-generated in the dropdown menu in `_includes/header.html`. They each have a doc inside `_pages.html` so the link doesn't return a 404 page.

My posts separate into two sections. In the future, this will be displayed on the dropdown menu and custom home page.

All posts have two categories. The first being either ***personal-dev*** or ***society**, and the then a second category and tags from the following list. 

0. General 
	- Announcements
	- Store

1. **Personal development**/ individual/ small-scale
	- Mastery <- skill development, experiment
		- drawing
		- web dev
		- animation
		- story
		- visual thinking
	- Emotions <- self-love, trauma, happiness, depression, healing
	- Health <- vegan, hormones
	- Relationships <- manipulation, conflict resolution
	- Consciousness <- social conditioning, law of attraction, spirituality
	- Productivity <- motivation, habits
	- Abundance <- money, business 

2. **Society commentary**/ groups/ big-scale 
	- Education <- public education, higher education, social-conditioning (*These posts also 	inherit the Society category.)
	- Government <- politics
	- Economy
	- Insurance


#### Adding New Categories

Only after checking above list to prevent dublication of categories...

1. In `_pages` make `category-name.md`
2. Within that file, add the following FrontMatter:
	```markdown 
	layout: posts
	title: Category Name
	permalink: /category-name/
	category: category-name
	```
3. In post, add `category: category-name` to FrontMatter. 
4. Add category to above list.

Links to categories are automatically generated into the dropdown menu under *Blog*. The code for that is in `header.html`. 

### Adding Posts

See Jekyll's [writing posts documentation](https://jekyllrb.com/docs/posts/).

If not ready to publish, add to `_drafts` folder. Move to `_posts` when ready to publish. 

Once new file in `_posts` is pushed to main directory, it will be sent to out to RSS email campaign. 

#### Writing

- [Use markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Prioritize italics over bold
- Use ordered and unordered lists
- When specifying author for blockquote, instead of markdown using HTML to nest the `<footer>` tag containing the author name inside the `<blockquote>`
- Add emphasis to specific paragraphs, especially if containing antecodes, with `<p class="sidenote"></p>`

### Excerpts

Creates "Read more" link for the post shown where `posts.html` is placed. 

Make sure `excerpt_separator: <!--more-->` is in post front matter, and add `<!--more-->` to the cut off point in the post.

#### Research 

##### References

Input: 

```markdown
**The quick brown [fox][1], jumped over the lazy [dog][2].**

[1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
[2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"
```

Output: 

**The quick brown [fox][1], jumped over the lazy [dog][2].**

[1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
[2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"

##### Footnotes 

Input: 

```markdown
**The quick brown fox[^1] jumped over the lazy dog[^2].**

[^1]: Foxes are red
[^2]: Dogs are usually not red
```

Output: ***Works on the blog, not here***

**The quick brown fox[^1] jumped over the lazy dog[^2].**

[^1]: Foxes are red
[^2]: Dogs are usually not red

#### Adding Images

Adding a single image.
1. Add image to `assets/img/YYYY/MM/`.
2. Link in post with markdown syntax. 
3. If wanting to add caption, use `<figure>` and `<figcaption>`.

Adding an image gallery/ lightbox. **WIP**
1. In the `assets/img/YYYY/MM/`directory, create a folder called `gallery` and place images there. 
2. ... 

Adding slideshows.<a name="slideshow"></a> 
1. List out images in HTML.
2. Add classes `mySlides` and `animate-fading`.
3. Add to bottom. `<script src="../assets/js/slideshow.js"></script>`.





Resources 
- [Jekyll Quickstart Guide](https://jekyllrb.com/docs/quickstart/)


