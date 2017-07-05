(function () {
    var searchTerm = getQueryVariable('query');
    if (searchTerm) {
        var elements = document.getElementsByClassName('search-box');
        for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute("value", searchTerm);
        }

        displaySearchResults(search(searchTerm)); // We'll write this in the next section
    }

    function displaySearchResults(results) {
        var postsPerPage = 3;
        var currentPage = (getQueryVariable('page') || 1) - 1;

        // displays the posts
        var searchResults = document.getElementById('search-results');
        if (results.length) { // Are there any results?
            var appendString = '';
            for (var i = currentPage * postsPerPage; i < (currentPage * postsPerPage) + postsPerPage && i < results.length; i++) {  // Iterate over the results
                var item = window.store[results[i].ref];
                appendString += '<li class="post-list-item">';
                appendString += '<h2><a class="post-link" href="' + item.url + '">' + item.title + '</a></h2>';
                appendString += '<span class="post-meta">' + item.date + '</span>';
                appendString += '</li>';
            }

            if (results.length > postsPerPage) {
                appendString += '<li><div class="pagination"><ul>';
                if (currentPage !== 0) {
                    //<li><a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Newer Posts</a></li>
                    var previousPage = '/search/?query=' + getQueryVariable('query') + '&page=' + currentPage;
                    appendString += '<li><a href="' + previousPage + '">&laquo; Newer Posts</a></li>'
                }

                for (var i = 0; i < results.length / postsPerPage; i++) {
                    if (i === currentPage) {
                        appendString += '<li class="current"><em>' + (i + 1) + '</em></li>';
                    } else {
                        appendString += '<li><a href="/search/?query=' + getQueryVariable('query') + '&page=' + (i + 1) + '">' + (i + 1) + '</a></li>';
                    }
                }

                if (currentPage !== Math.floor(results.length / postsPerPage)) {
                    //<li><a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Older Posts &raquo;</a></li>
                    var nextPage = '/search/?query=' + getQueryVariable('query') + '&page=' + (currentPage + 2);
                    appendString += '<li><a href="' + nextPage + '">Older Posts &raquo;</a></li>'
                }

                appendString += '</ul></div></li>';
            }

            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = 'No results found';
        }


    }
})();
