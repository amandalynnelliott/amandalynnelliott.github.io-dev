---
layout: page
title: Full Archives
permalink: /archives/
---
<div class="post">
   {% for post in site.posts %}
		{% assign currentDate = post.date | date: "%Y" %}
		{% if currentDate != myDate %}
			{% unless forloop.first %}</ul>{% endunless %}
			<h3>{{ currentDate }}</h3>
			<ul class="archive-list">
			{% assign myDate = currentDate %}
		{% endif %}
        <li><time>{{ post.date | date:"%b %d" }} </time>&nbsp;<a href="{{ post.url }}">{{ post.title }}</a></li>       {% if forloop.last %}</ul>{% endif %}
   {% endfor %}
</div>
