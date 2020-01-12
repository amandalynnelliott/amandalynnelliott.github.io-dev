$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('img').not(':no-popup').magnificPopup({
        type: 'image'
    });

    /*
        Image galleries

        EXAMPLE
        See: lightbox-WIP.md
    */

    $("img[class^='gallery']").wrap("<div class='gall-container'></div>");

    var imgCount = 0;

    function getOverlayTemplate(count) {
        return "<div class='gall-text'><span>Image Gallery: 1 of " + count + "</span><div><i class='fa fa-caret-left' aria-hidden='true'></i>&nbsp;<i class='fa fa-caret-right' aria-hidden='true'></i></div></div>"
    }

    imgCount = 3;
    $('.gallery-pplsketch').before(getOverlayTemplate(imgCount));
    $('.gallery-pplsketch').magnificPopup({
        type: 'image',
        items: [{
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

    imgCount = 24;
    $('.gallery-elephant').before(getOverlayTemplate(imgCount));
    $('.gallery-elephant').magnificPopup({
        type: 'image',
        items: (function () {
            var items = [];
            for (var i = 1; i <= imgCount; i++) {
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

    imgCount = 9;
    $('.gallery-zoo').before(getOverlayTemplate(imgCount));
    $('.gallery-zoo').magnificPopup({
        type: 'image',
        items: (function () {
            var items = [];
            for (var i = 1; i <= imgCount; i++) {
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

    imgCount = 4;
    $('.gallery-emiliano').before(getOverlayTemplate(imgCount));
    $('.gallery-emiliano').magnificPopup({
        type: 'image',
        items: (function () {
            var items = [];
            for (var i = 1; i <= imgCount; i++) {
                items.push({
                    src: '/assets/img/cc/art/gallery-emiliano/' + i + '.jpg'
                });
            }
            return items;
        })(),
        gallery: {
            enabled: true
        }
    });

    imgCount = 4;
    $('.gallery-emiliano').before(getOverlayTemplate(imgCount));
    $('.gallery-victo').magnificPopup({
        type: 'image',
        items: (function () {
            var items = [];
            for (var i = 1; i <= imgCount; i++) {
                items.push({
                    src: '/assets/img/cc/art/gallery-victo/' + i + '.jpg'
                });
            }
            return items;
        })(),
        gallery: {
            enabled: true
        }
    });

    imgCount = 5;
    $('.gallery-trip-sketches').before(getOverlayTemplate(imgCount));
    $('.gallery-trip-sketches').magnificPopup({
        type: 'image',
        items: (function () {
            var items = [];
            for (var i = 1; i <= imgCount; i++) {
                items.push({
                    src: '/assets/img/2017/12/gallery-trip-sketches/' + i + '.jpg'
                });
            }
            return items;
        })(),
        gallery: {
            enabled: true
        }
    });

    imgCount = 3;
    $('.gallery-AKEA').before(getOverlayTemplate(imgCount));
    $('.gallery-AKEA').magnificPopup({
        type: 'image',
        items: (function () {
            var items = [];
            for (var i = 1; i <= imgCount; i++) {
                items.push({
                    src: '/assets/img/2020/01/AKEA-gallery/' + i + '.PNG'
                });
            }
            return items;
        })(),
        gallery: {
            enabled: true
        }
    });
});
