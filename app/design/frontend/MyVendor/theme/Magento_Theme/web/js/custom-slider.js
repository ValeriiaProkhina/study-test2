define(["jquery", "slick"], function ($) {
     $(document).ready(function () {
        $(".custom-slider").slick({
            dots: true,
            dotsClass: 'slick-dots',
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 2,
            // centerMode: true,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    });
});

