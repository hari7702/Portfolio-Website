document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', () => {
        alert('Your CV is being downloaded!');
    });

    // Add more animations and effects
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered');
        });
    });

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered');
        });
    });

    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Send the form data to the server or email
        alert(`Thank you, ${name}. Your message has been sent!`);
    });
});
