gsap.registerPlugin(ScrollTrigger);

const hamburger = document.querySelector('.hamburger');
const menubar = document.querySelector('.menubar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    menubar.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menubar a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('hamburger-active');
        menubar.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

gsap.from('.hero-logo', {
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.hero-text h1:first-child', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
});

gsap.from('.hero-text h1:nth-child(2)', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
});

gsap.from('.hero-text p', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
});

gsap.from('.hero-contact', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 1
});

gsap.from('.scrolldown', {
    duration: 1,
    opacity: 0,
    ease: 'power3.out',
    delay: 1.2
});

gsap.from('.skills-left h2', {
    scrollTrigger: {
        trigger: '.skills-left h2',
        start: 'top 80%',
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.skills-left p', {
    scrollTrigger: {
        trigger: '.skills-left p',
        start: 'top 80%',
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.see-more-btn', {
    scrollTrigger: {
        trigger: '.see-more-btn',
        start: 'top 80%',
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
});

const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
        },
        duration: 0.8,
        x: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: index * 0.1
    });
});

const skillBars = document.querySelectorAll('.skill-bar-fill');
skillBars.forEach((bar, index) => {
    const width = bar.style.width;
    bar.style.width = '0%';
    
    gsap.to(bar, {
        scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
        },
        duration: 1.5,
        width: width,
        ease: 'power2.out',
        delay: index * 0.1
    });
});

gsap.from('.projects-title', {
    scrollTrigger: {
        trigger: '.projects-title',
        start: 'top 80%',
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.projects-subtitle', {
    scrollTrigger: {
        trigger: '.projects-subtitle',
        start: 'top 80%',
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        duration: 0.8,
        y: 80,
        opacity: 0,
        ease: 'power3.out',
        delay: (index % 3) * 0.15
    });
});

gsap.to('.skills-background', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    y: -100,
    ease: 'none'
});

let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            y: -15,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            y: 0,
            ease: 'power2.out'
        });
    });
});

const buttons = document.querySelectorAll('.hero-contact, .see-more-btn, .project-link');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
            duration: 0.3,
            x: x * 0.3,
            y: y * 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            duration: 0.5,
            x: 0,
            y: 0,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});

const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
    const reviewCards = marqueeTrack.querySelectorAll('.review-card');
    const reviewCount = reviewCards.length;
    
    const cloneCount = Math.max(1, Math.ceil(1 / reviewCount));
    
    for (let i = 0; i < cloneCount; i++) {
        reviewCards.forEach(card => {
            const clone = card.cloneNode(true);
            marqueeTrack.appendChild(clone);
        });
    }
}

gsap.from('.reviews-title', {
    scrollTrigger: {
        trigger: '.reviews-title',
        start: 'top 80%',
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.reviews-subtitle', {
    scrollTrigger: {
        trigger: '.reviews-subtitle',
        start: 'top 80%',
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.marquee-container', {
    scrollTrigger: {
        trigger: '.marquee-container',
        start: 'top 80%',
    },
    duration: 1,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
});

gsap.to('.reviews-background', {
    scrollTrigger: {
        trigger: '.reviews',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    y: -100,
    ease: 'none'
});

const footerSections = document.querySelectorAll('.footer-section');
footerSections.forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 90%',
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: index * 0.1
    });
});

gsap.from('.footer-bottom', {
    scrollTrigger: {
        trigger: '.footer-bottom',
        start: 'top 90%',
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach((link, index) => {
    gsap.from(link, {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 90%',
        },
        duration: 0.6,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.5 + (index * 0.1)
    });
});