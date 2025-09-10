// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initNavbarEffects();
    initScrollAnimations();
    initParticleBackground();
    initTypingEffect();
    initSkillBars();
    initProjectCards();
    initScrollToTop();
    initMobileMenu();
});

// Initialize all animations
function initAnimations() {
    // Add CSS classes for animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-in-left {
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-in-right {
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate {
            opacity: 1 !important;
            transform: translate(0) !important;
        }
        
        .floating {
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .pulse {
            animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        
        .rotate-slow {
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .skill-bar {
            width: 0;
            height: 4px;
            background: linear-gradient(135deg, #BC6FF1, #892CDC);
            transition: width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-radius: 2px;
            margin-top: 8px;
        }
        
        .skill-bar.animate {
            width: var(--skill-width);
        }
        
        .typewriter {
            overflow: hidden;
            border-right: 2px solid #BC6FF1;
            white-space: nowrap;
            animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }
        
        @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: #BC6FF1; }
        }
        
        .glitch {
            position: relative;
            animation: glitch 2s infinite;
        }
        
        @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
        }
        
        .particle {
            position: absolute;
            background: #BC6FF1;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.6;
        }
        
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #BC6FF1, #892CDC);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(188, 111, 241, 0.3);
        }
        
        .scroll-to-top.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .scroll-to-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(188, 111, 241, 0.5);
        }
        
        .mobile-menu-toggle {
            display: none;
            flex-direction: column;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1001;
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
        }
        
        .mobile-menu-toggle span {
            width: 25px;
            height: 3px;
            background: #BC6FF1;
            margin: 3px 0;
            transition: 0.3s;
            border-radius: 2px;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        .tilt-card {
            transition: transform 0.3s ease;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: flex;
            }
            
            .nav-links {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100%;
                height: 100vh;
                background: rgba(19, 9, 20, 0.98);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: right 0.3s ease;
                backdrop-filter: blur(15px);
            }
            
            .nav-links.active {
                right: 0;
            }
            
            .nav-links li {
                margin: 20px 0;
            }
            
            .contact {
                margin-top: 30px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Navbar scroll effects
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            navbar.style.background = 'rgba(19, 9, 20, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(19, 9, 20, 0.95)';
            navbar.style.backdropFilter = 'blur(15px)';
        }
        
        // Hide/show navbar on scroll
        if (scrollY > lastScrollY && scrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = scrollY;
    });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, delay * 1000);
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const elementsToAnimate = [
        { selector: '.hero-title', class: 'fade-in-up' },
        { selector: '.hero-subtitle', class: 'fade-in-up' },
        { selector: '.cta-button', class: 'fade-in-up' },
        { selector: '.section-title', class: 'fade-in-up' },
        { selector: '.about-text', class: 'fade-in-left' },
        { selector: '.skills', class: 'fade-in-right' },
        { selector: '.project-card', class: 'fade-in-up' },
        { selector: '.review-card', class: 'fade-in-up' },
        { selector: '.client-logo', class: 'fade-in-up' },
        { selector: '.contact-item', class: 'fade-in-left' },
        { selector: '.contact-cta', class: 'fade-in-right' }
    ];
    
    elementsToAnimate.forEach(({ selector, class: className }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.classList.add(className);
            el.setAttribute('data-delay', index * 0.1);
            observer.observe(el);
        });
    });
}

// Particle background animation
function initParticleBackground() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(hero);
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
        
        container.appendChild(particle);
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                createParticle(container);
            }
        }, (duration + delay) * 1000);
    }
}

// Typing effect for hero subtitle
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;
    
    setTimeout(() => {
        subtitle.textContent = '';
        subtitle.classList.add('typewriter');
        
        let i = 0;
        const typeInterval = setInterval(() => {
            subtitle.textContent += originalText.charAt(i);
            i++;
            
            if (i >= originalText.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    subtitle.classList.remove('typewriter');
                }, 1000);
            }
        }, 50);
    }, 1000);
}

// Animated skill bars
function initSkillBars() {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach(skill => {
        const skillName = skill.querySelector('.skill-name');
        const progressBar = document.createElement('div');
        progressBar.className = 'skill-bar';
        
        // Set random width for demo (you can replace with actual skill levels)
        const skillWidths = {
            'JavaScript': '90%',
            'Java': '85%',
            'HTML': '95%',
            'Python': '80%',
            'CSS': '88%',
            'Content Creation': '92%',
            'Configurator': '87%',
            'Discord Moderation': '95%'
        };
        
        const width = skillWidths[skillName.textContent] || '75%';
        progressBar.style.setProperty('--skill-width', width);
        
        skill.appendChild(progressBar);
        
        // Animate on hover
        skill.addEventListener('mouseenter', () => {
            progressBar.classList.add('animate');
        });
    });
}

// Project card tilt effect
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.classList.add('tilt-card');
        
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Scroll to top button
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('a');
    scrollBtn.href = '#home';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    // Smooth scroll
    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    // Create mobile menu toggle if it doesn't exist
    let mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (!mobileToggle) {
        mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.setAttribute('aria-label', 'Toggle mobile menu');
        mobileToggle.innerHTML = '<span></span><span></span><span></span>';
        document.body.appendChild(mobileToggle);
    }
    
    const navLinks = document.querySelector('.nav-links');
    
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on links
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add glitch effect to logo on hover
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.classList.add('glitch');
            setTimeout(() => {
                logo.classList.remove('glitch');
            }, 2000);
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = document.createElement('div');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(188, 111, 241, 0.3);
        border-top: 3px solid #BC6FF1;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    const spinnerStyle = document.createElement('style');
    spinnerStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinnerStyle);
    
    loader.appendChild(spinner);
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});

// Add mouse trail effect
let mouseTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY });
    
    if (mouseTrail.length > maxTrailLength) {
        mouseTrail.shift();
    }
    
    // Create trail particles
    if (Math.random() > 0.8) {
        createTrailParticle(e.clientX, e.clientY);
    }
});

function createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: #BC6FF1;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.7;
        animation: trailFade 0.8s ease-out forwards;
    `;
    
    if (!document.querySelector('#trail-style')) {
        const trailStyle = document.createElement('style');
        trailStyle.id = 'trail-style';
        trailStyle.textContent = `
            @keyframes trailFade {
                0% { opacity: 0.7; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `;
        document.head.appendChild(trailStyle);
    }
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 800);
}

// Add intersection observer for counting animations
function initCountingAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let current = 0;
                const increment = target / 100;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}