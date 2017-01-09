---
layout: page
title: Archive
permalink: /archive/
---

<div class="archive">
    <ul>
        {% for post in site.posts %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
        {% endfor %}
    </ul>
</div>