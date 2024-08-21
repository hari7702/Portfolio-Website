const texts = [
    "Aspiring Data Scientist",
    "AI Enthusiast",
    "A Tech Explorer",
    "A Graphic Designer",
    "Karate Mentor"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter-text').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Adjust delay before the next text appears
    } else {
        setTimeout(type, 200); // Adjust typing speed for better visibility
    }
}());



$(document).ready(function(){
    $('.project-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 700,
        dots: false,  // Disabled dots
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

    AOS.init({
        duration: 1200,
    });
});

function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:harianirudh0@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
}
