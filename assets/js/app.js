$(document).ready(function () {

    $(window).on('load', function () {
        $('#loader').fadeOut('slow');
    });

    $('.navbar-toggler').click(function () {
        const $navbarToggler = $(this);
        const $menuIcon = $navbarToggler.find('.menu-icon');
        const isExpanded = $navbarToggler.attr('aria-expanded') === 'true';

        if (isExpanded) {
            $menuIcon.removeClass('fa-bars').addClass('fa-times');
        } else {
            $menuIcon.removeClass('fa-times').addClass('fa-bars');
        }
    });

    // custom select
    $('.custom-select').select2();

    // owl carousel
    // services slider
    $('.owl-carousel-services').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
    });

    $('.owl-carousel-customers').owlCarousel({

        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 8
            }
        },
    });


    var publications = $('.owl-carousel-publications').owlCarousel({
        loop: false,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#publicationsPrevious').click(function () {
        publications.trigger('prev.owl.carousel');
    });

    $('#publicationsNext').click(function () {
        publications.trigger('next.owl.carousel');
    });


    const heroSplide = new Splide('.splide-hero', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        speed: 3000,
        interval: 5000,
        arrows: true,
        pauseOnHover: true,
        pagination: true,
    });

    let progressBar = document.querySelector('.hero-progress-bar');

    function startProgressBar() {
        progressBar.style.transition = `width ${heroSplide.options.interval - 100}ms linear`;
        progressBar.style.width = '100%';
    }
    function resetProgressBar() {
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
    }
    heroSplide.on('autoplay:play', startProgressBar);
    heroSplide.on('autoplay:pause', resetProgressBar);

    heroSplide.on('move', () => {
        resetProgressBar();
        setTimeout(startProgressBar, 20);
    });
    heroSplide.on('end', resetProgressBar);
    heroSplide.mount();




    const testimonialSplide = new Splide('.splide-testimonial', {
        type: 'loop',
        perPage: 2,
        breakpoints: {
            360: { perPage: 1 },
            480: { perPage: 1 },
            640: { perPage: 1 },
            768: { perPage: 1 },
            900: { perPage: 2 },
            1024: { perPage: 2 },
            1440: { perPage: 2 },
        },
        autoplay: true,
        interval: 5000,
        speed: 3000,
        arrows: false,
        gap: '1em',
        pagination: true,
        pauseOnHover: true,
    });

    testimonialSplide.on('pagination:mounted', function (data) {
        data.list.classList.add('splide-testimonial-pagination');
        // data.items.forEach(function (item) {
        //     item.button.textContent = String(item.page + 1);
        // });
    });

    testimonialSplide.mount();
});




function setDefaultFile(inputSelector, defaultFileUrl) {
    if (defaultFileUrl) {
        fetch(defaultFileUrl)
            .then(response => response.blob())
            .then(blob => new File([blob], "default-file.jpg"))
            .then(function (file) {
                var dropify = $(inputSelector).dropify();
                dropify.data('dropify').settings.defaultFile = file;
                dropify.dropify('destroy');
                dropify.dropify();
            });
    }
}
