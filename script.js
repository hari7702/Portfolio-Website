// Typewriter effect for the hero section
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

// Dark Mode Toggle Switch Functionality
document.getElementById('toggle-switch-checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    const contactContainer = document.querySelector('.contact-container');
    if (this.checked) {
        contactContainer.style.backgroundColor = '#1e1e1e';
        contactContainer.style.color = '#f4f4f4';
    } else {
        contactContainer.style.backgroundColor = '#f9f9f9';
        contactContainer.style.color = '#333';
    }
});


function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElement.getElementById('message').value;

    const mailtoLink = `mailto:harianirudh0@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
}

document.addEventListener("DOMContentLoaded", function() {
    const countElement = document.getElementById("visitor-count");

    // This is a placeholder for an actual visitor count logic
    // For now, we simulate it with a random number
    const visitorCount = Math.floor(Math.random() * 1000) + 1;

    countElement.textContent = visitorCount;

    // Add some animation
    countElement.style.transition = "opacity 1s";
    countElement.style.opacity = "0";
    setTimeout(() => {
        countElement.style.opacity = "1";
    }, 100);
});

document.addEventListener("DOMContentLoaded", function() {
    const navText = "Hari's Pathway...</>";
    let index = 0;
    
    function typeNav() {
        document.getElementById('typewriter-nav').textContent = navText.slice(0, ++index);
        if (index < navText.length) {
            setTimeout(typeNav, 150); // Adjust typing speed if necessary
        }
    }
    
    typeNav();
});
