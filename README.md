<!--
To add
- plugins
- google analytics
-->

# AmandaLynnElliott's blog theme

A Jekyll-generated minimial blog website. The focus is less on design, more on content and readability. Equipped with RSS Mailchimp email subscription.

## Getting Started

There are two repos for this site. `amandalynnelliott.github.io` for the live site that is set up with GitHub Pages.
And `amandalynnelliott.github.io-dev` that can be served locally for development.

1. [Ruby install v2.7 w/devkit](https://www.ruby-lang.org/en/)
2. [Git install](https://git-scm.com/)
3. `gem install jekyll bundler`
4. `git clone https://github.com/amandalynnelliott/amandalynnelliott.github.io.git`
5. `cd amandalynnelliott.github.io`
6. `bundle exec jekyll serve --livereload`
   1. `--livereload` may not work. if it doesn't, just omit it

## Updating Site (and adding posts)

Using the command `node deploy` runs a script to deletes, regenerates, and pushes the live repo.
Push dev repo with commit message.

### Updating Site - old method

1. Once changes are added to the `-dev` repo, type the command `jekyll build.`
2. Go into the `_site` folder and copy the new contents.
3. Paste and replace the contents in the live repo, except for the .git folder.
4. Commit both repos.

#### About Adding Posts

See Jekyll's [writing posts documentation](https://jekyllrb.com/docs/posts/).

If not ready to publish, add to `_drafts` folder. Move to `_posts` when ready to publish.

Once new file in `_posts` is pushed to main directory, it will be sent to out to RSS email campaign.

## Contents At-A-Glance

This theme was built up from the Jekyll theme [`minima`](https://github.com/jekyll/minima).

### Layouts

Refers to the `_layouts` directory and determines much of the website structure. Adding a new layout is like adding a new page type, and is done by adding the file to the directory, and linking to it in the `layout:` property in the FrontMatter of the doc.

- `default.html` --- The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents in this file at the line that says `{{ content }}` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`. This also has a `caption` variable that can be used to add a caption under the header, which is in the same position and styled as `post-meta` for posts.
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
- `mailchimp.html` --- MailChimp subscribe form.

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
- `jquery-magnific-popup.min.js` --- For Maginific Popup, which is used to allow images to enlarge with lightbox when clicked, and for adding image gallery functionality.
- `lunr.min.js` --- For search functionality.
- `popup.js` --- Controls made from Magnific Popup, including images galleries.
- `search.js`
- `slideshow.js` --- For fading image [slideshows](#slideshow). Mostly reserved for pages instead of blog posts because it can be distracting.

## Content

### Categories and Tags

All posts have two categories unless they are general. If not general the first is *personal-dev* or *society*, and then they have a second category and tags from the following list.

1. General
    - **Announcements**
    - **Store**

2. **Personal development**/ individual/ small-scale
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

3. **Society commentary**/ groups/ big-scale
    - Education <- public education, higher education, social-conditioning (*These posts also inherit the Society category.)
    - Government <- politics
    - Sustainability
    - Economy
    - Insurance

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

Output:

![doc footnote](/doc-footnote.PNG?raw=true)

#### Adding Images

Adding a single image.

1. Add image to `assets/img/YYYY/MM/`.
2. Link in post with markdown syntax.
3. If wanting to add caption, use `<figure>` and `<figcaption>`.

Adding an image gallery --- Using **Magnific Popup**

1. In the `assets/img/YYYY/MM/`directory, create a folder called `gallery` and place images there, each named as a number starting with one.
2. Where you want the gallery, in the post, add the image with unique class following the standard of `gallery-POST`.
3. With that class, write the gallery script in `popup.js.`

Adding image fading slideshows. `<a name="slideshow"></a>`

1. List out images in HTML.
2. Add classes `mySlides` and `animate-fading`.
3. Add to bottom. `<script src="../assets/js/slideshow.js"></script>`.

## Branding

[See example post.](/doc-branding.PNG)

### Fonts

| Type         | Font      | Size | Weight | Color   | Style  |
| ------------ |-----------| ---- | ------ | ------- | ------ |
| `<h1>`       | Signika   | 36px | 600    | #505050 | Normal |
| `<h2>`       | Signika   | 34px | 600    | #505050 | Normal |
| `<h3>`       | Signika   | 30px | 600    | #505050 | Normal |
| `<h4>`       | Signika   | 26px | 300    | #828282 | Normal |
| `body`       | Open Sans | 20px | 400    | #505050 | Normal |
| `caption`    | Open Sans | 14px | 400    | #828282 | Normal |
| `.post-meta` | Signika   | 16px | 400    | #828282 | Normal |
| `blockquote` | Open Sans | 30px | 400    | #828282 | Italic |

### Colors

| Type              | Hexcode |
| ----------------- | ------- |
| background        | #fdfdfd |
| text              | #505050 |
| brand-color       | #7178af |
| brand-color light | #E3E5EF |
| grey              | #828282 |
| grey light        | #e8e8e8 |
| grey dark         | #424242 |
| header background | #292929 |
| header title      | #e4e4e4 |

## Plugins

- jekyll-feed
- jekyll-paginate
- jekyll-paginate-categories --- Third party plugin, and the reason site has to be built locally before committing to GitHub's servers.
