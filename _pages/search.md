---
layout: page
title: Search Results
permalink: /search/
---
<form action="/search/" method="get">
    <label for="search-box"></label>
    <input type="text" class="search-box" name="query">
    <input type="submit" value="Search">
</form>
<ul class="post-list" id="search-results"></ul>
<script>
window.store = {
	{% for post in site.posts %}
		
		//<li class="post-list-item">
		
		"{{ post.url | slugify }}": {
			"title": "{{ post.title | xml_escape }}",
			"author": "{{ post.author | xml_escape }}",
			"category": "{{ post.category | xml_escape }}",
			"content": {{ post.content | strip_html | strip_newlines | jsonify }},
			"url": "{{ post.url | xml_escape }}",
			"date": "{{ post.date | date: "%b %-d, %Y" }}",
			"excerpt": {{ post.excerpt | jsonify }}
		}
		{% unless forloop.last %}
			,
		{% endunless %}
		
		//</li>
		
	{% endfor %}
};
</script>
<script src="/assets/js/search.js"></script>
