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

<a id="search-prev">Previous</a>
<a id="search-next">Next</a>

<script>
window.store = {
	{% for post in site.posts %}
	"{{ post.url | slugify }}": {
		"title": "{{ post.title | xml_escape }}",
		"author": "{{ post.author | xml_escape }}",
		"category": "{{ post.category | xml_escape }}",
		"content": {{ post.content | strip_html | strip_newlines | jsonify }},
		"url": "{{ post.url | xml_escape }}",
		"date": "{{ post.date | date: "%b %-d, %Y" }}"
	}{% unless forloop.last %},{% endunless %}	
	{% endfor %}
};
</script>
<script src="/assets/js/search.js"></script>

<script>
	$('#search-prev').click(ev => {
		var page = (parseInt(getQueryVariable('page')) || 1) - 1;
		window.location.href = '/search/?query=' + getQueryVariable('query') + '&page=' + page;
	});

	$('#search-next').click(ev => {
		var page = (parseInt(getQueryVariable('page')) || 1) + 1;
		window.location.href = '/search/?query=' + getQueryVariable('query') + '&page=' + page;
	});
</script>
