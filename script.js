// Dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Project filtering
const projectList = document.getElementById('project-list');
const filterButtons = document.querySelectorAll('#projects button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.id.replace('filter-', '');
        const projects = document.querySelectorAll('.project');

        projects.forEach(project => {
            if (category === 'all' || project.dataset.category === category) {
                project.classList.add('show');
            } else {
                project.classList.remove('show');
            }
        });
    });
});

// Contact form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (name && email && message) {
        alert('Message sent!');
    } else {
        alert('Please fill in all fields!');
    }
});