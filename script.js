// Scroll Reveal
const reveals = document.querySelectorAll('.reveal, .reveal-right');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => observer.observe(el));

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Counter animation
const statNumbers = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.dataset.target;
            const duration = 2000;
            const start = performance.now();
            const animate = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target);
                if (progress < 1) requestAnimationFrame(animate);
                else el.textContent = target;
            };
            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
statNumbers.forEach(el => counterObserver.observe(el));

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Message Sent! ✓';
    btn.style.background = '#2D3561';
    btn.style.borderColor = '#2D3561';
    setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.style.borderColor = '';
        e.target.reset();
    }, 3000);
});
