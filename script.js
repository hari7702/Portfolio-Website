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
