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
    $('.steps_wr_form_btn1').click(function(e) {
        e.preventDefault();
        $('.steps_wr_form_item').removeClass('active');
        $('.steps_wr_form_item3').removeClass('active');
        $('.steps_wr_form_item4').removeClass('active');
        $('.steps_wr_form_item2').addClass('active');
        $('.steps_wr_nav_item2').addClass('active');
    });
    $('.steps_wr_form_btn2').click(function(e) {
        e.preventDefault();
        $('.steps_wr_form_item').removeClass('active');
        $('.steps_wr_form_item3').addClass('active');
        $('.steps_wr_form_item4').removeClass('active');
        $('.steps_wr_form_item2').removeClass('active');
        $('.steps_wr_nav_item3').addClass('active');
    });
    $('.steps_wr_form_btn3').click(function(e) {
        e.preventDefault();
        $('.steps_wr_form_item').removeClass('active');
        $('.steps_wr_form_item3').removeClass('active');
        $('.steps_wr_form_item4').addClass('active');
        $('.steps_wr_form_item2').removeClass('active');
    });
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $('a.terms').click(function(e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });  
});