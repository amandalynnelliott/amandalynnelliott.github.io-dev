(function () {
    var searchTerm = getQueryVariable('query');
    if (searchTerm) {
        var elements = document.getElementsByClassName('search-box');
        for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute("value", searchTerm);
        }
        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.field('id');
            this.field('title');
            this.field('author');
            this.field('category');
            this.field('content');
            this.field('date', { boost: 10 });
        });
        for (var key in window.store) { // Add the data to lunr
            idx.add({
                'id': key,
                'title': window.store[key].title,
                'author': window.store[key].author,
                'category': window.store[key].category,
                'content': window.store[key].content,
                'date': window.store[key].date
            });
            var results = idx.search(searchTerm); // Get lunr to perform a search
            displaySearchResults(results, window.store); // We'll write this in the next section
        }
    }

    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');
        if (results.length) { // Are there any results?
            var appendString = '';
            var postsPerPage = 3;
            var currentPage = (getQueryVariable('page') || 1) - 1;
            for (var i = currentPage * postsPerPage; i < (currentPage * postsPerPage) + postsPerPage && i < results.length; i++) {  // Iterate over the results
                var item = store[results[i].ref];
                appendString += '<li class="post-list-item">';
                appendString += '<h2><a class="post-link" href="' + item.url + '">' + item.title + '</a></h2>';
                appendString += '<span class="post-meta">' + item.date + '</span>';
                appendString += '</li>';
            }
            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = 'No results found';
        }
    }
})();
