$(document).ready(function () {
    $('.payment_slider').owlCarousel({
        loop:true,
        autoplay:true,
        margin:0,
        nav:false,
        dots:false,
        responsiveClass:true,
        items: 5,
        autoWidth: true,
        center: true
    });
    $('#adformat_popunder').click(function() {
        $('#adformats_content1').addClass('active');
        $(this).addClass('active');
        $('#adformat_instream').removeClass('active');
        $('#adformat_inpage').removeClass('active');
        $('#adformat_native').removeClass('active');
        $('#adformat_web').removeClass('active');
        $('#adformats_content2').removeClass('active');
        $('#adformats_content3').removeClass('active');
        $('#adformats_content4').removeClass('active');
        $('#adformats_content5').removeClass('active');
    });
    $('#adformat_instream').click(function() {
        $(this).addClass('active');
        $('#adformat_popunder').removeClass('active');
        $('#adformat_inpage').removeClass('active');
        $('#adformat_native').removeClass('active');
        $('#adformat_web').removeClass('active');
        $('#adformats_content1').removeClass('active');
        $('#adformats_content2').addClass('active');
        $('#adformats_content3').removeClass('active');
        $('#adformats_content4').removeClass('active');
        $('#adformats_content5').removeClass('active');
    });
    $('#adformat_inpage').click(function() {
        $(this).addClass('active');
        $('#adformat_popunder').removeClass('active');
        $('#adformat_instream').removeClass('active');
        $('#adformat_native').removeClass('active');
        $('#adformat_web').removeClass('active');
        $('#adformats_content1').removeClass('active');
        $('#adformats_content2').removeClass('active');
        $('#adformats_content3').addClass('active');
        $('#adformats_content4').removeClass('active');
        $('#adformats_content5').removeClass('active');
    });
    $('#adformat_native').click(function() {
        $(this).addClass('active');
        $('#adformat_popunder').removeClass('active');
        $('#adformat_instream').removeClass('active');
        $('#adformat_inpage').removeClass('active');
        $('#adformat_web').removeClass('active');
        $('#adformats_content1').removeClass('active');
        $('#adformats_content2').removeClass('active');
        $('#adformats_content3').removeClass('active');
        $('#adformats_content4').addClass('active');
        $('#adformats_content5').removeClass('active');
    });
    $('#adformat_web').click(function() {
        $(this).addClass('active');
        $('#adformat_popunder').removeClass('active');
        $('#adformat_instream').removeClass('active');
        $('#adformat_inpage').removeClass('active');
        $('#adformat_native').removeClass('active');
        $('#adformats_content1').removeClass('active');
        $('#adformats_content2').removeClass('active');
        $('#adformats_content3').removeClass('active');
        $('#adformats_content4').removeClass('active');
        $('#adformats_content5').addClass('active');
    });
    $('.language a').click(function(e) {
        e.preventDefault();
        $('.language_sub').fadeToggle();
    });
    $(".header_offer_left a, .header_top nav ul li a").click(function() {
        $('html, body').animate({
            scrollTop: $("#question").offset().top
        }, 2000);
    });
    $(".question_right form input").focus(function() {
        $(this).parent().find('label').toggleClass('active');
    });
    $(".burber_menu").click(function() {
        $('.header_mb_wr').toggleClass('active');
    });
    jQuery(document).on('click',function (e) {
        var el = '.question_right form input';
        if (jQuery(e.target).closest(el).length) return;
        // дальше пишем код который нужно выполнить по клику вне элемента
        $('.question_right form label').removeClass('active');
       });
});