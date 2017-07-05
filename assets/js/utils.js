function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
    }
}

function search(searchTerm) {
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
    }

    return idx.search(searchTerm); // Get lunr to perform a search
}
