$(document).ready(function () {
    $('img').magnificPopup({
        type: 'image'
    });

    /*
        EXAMPLE
        See: lightbox-WIP.md
    */
    $('.elephant-image').magnificPopup({
        type: 'image',
        items: [
            {
                src: '/assets/img/chart.png'
            }
        ]
    });

    /*
        EXAMPLE
        See: lightbox-WIP.md
    */
    $('.pplsketch-gallery').magnificPopup({
        type: 'image',
        items: [
            {
                src: '/assets/img/pplsketch.jpg'
            },
            {
                src: '/assets/img/pplsketch2.jpg'
            },
            {
                src: '/assets/img/pplsketch3.jpg'
            }
        ],
        gallery: {
            enabled: true
        }
    });

    $('.elephant-gallery').magnificPopup({
        type: 'image',
        items: (function () {
            var items = [];
            for (var i = 1; i <= 24; i++) {
                items.push({
                    src: '/assets/img/2017/04/elephant/' + i + '.jpg'
                });
            }
            return items;
        })(),
        gallery: {
            enabled: true
        }
    });

    $('.gallery-zoo').magnificPopup({
        type: 'image',
        items: (function () {
            var items = [];
            for (var i = 1; i <= 9; i++) {
                items.push({
                    src: '/assets/img/2017/05/gallery-zoo/' + i + '.jpg'
                });
            }
            return items;
        })(),
        gallery: {
            enabled: true
        }
    });
});