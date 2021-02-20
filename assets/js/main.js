$(document).ready(function () {
    $('.number_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
                dots:false
            },
            // breakpoint from 1199 up
            1199 : {
                items: 4
            }
        }
    });
    $('.hamburger').click( function() {
        $(this).toggleClass('is-active');
        $('.header_nav_mb').fadeToggle();
    });
});