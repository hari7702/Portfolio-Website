$(document).ready(function(){
    $('.project-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 700,
        dots: true,
        arrows: true
    });

    // Mobile menu functionality
    $('.menu-icon').click(function() {
        $('.res-navbar').toggleClass('show');
    });

    $('.close-icon').click(function() {
        $('.res-navbar').removeClass('show');
    });

    $('.res-navbtn').click(function() {
        $('.res-navbar').removeClass('show');
    });

    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! Your message has been sent.');
    });

    AOS.init({
        duration: 1200,
    });
});
