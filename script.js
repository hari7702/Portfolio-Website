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
            setTimeout(type, 1000); // Wait 1 second before typing the next word
        } else {
            setTimeout(type, 150); // Adjust the speed of typing
        }
    }());    

    // Visitor Counter
$(document).ready(function() {
    var counter = 0;
    if(localStorage.getItem('visitorCount')) {
        counter = parseInt(localStorage.getItem('visitorCount'));
    }
    counter++;
    localStorage.setItem('visitorCount', counter);
    $('#visitor-counter').text(counter);
});

function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:harianirudh0@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
}


    AOS.init({
        duration: 1200,
    });
    
});
