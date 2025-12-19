/**
 * Main JavaScript for Shivam Curtain Website
 * Optimized for performance and SEO
 */

(function() {
    'use strict';

    // DOM Elements
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const contactForm = document.getElementById('contactForm');

    // Navbar Scroll Effect
    let lastScroll = 0;
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }

    // Throttle scroll events for performance
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    window.addEventListener('scroll', throttle(handleScroll, 10));

    // Mobile Menu Toggle
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const isActive = mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            mobileMenuToggle.setAttribute('aria-expanded', isActive);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isActive ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // WhatsApp Message Handler
    const whatsappButton = document.getElementById('whatsappButton');
    if (whatsappButton && contactForm) {
        whatsappButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name') || '';
            const phone = formData.get('phone') || '';
            const email = formData.get('email') || '';
            const subject = formData.get('subject') || '';
            const message = formData.get('message') || '';
            
            // Basic validation
            if (!name || !phone || !email || !message) {
                alert('Please fill in all required fields (Name, Phone, Email, Message).');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = `Hello! I'm interested in your services.%0A%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Phone: ${encodeURIComponent(phone)}%0A` +
                `Email: ${encodeURIComponent(email)}%0A` +
                (subject ? `Subject: ${encodeURIComponent(subject)}%0A` : '') +
                `Message: ${encodeURIComponent(message)}`;
            
            // Open WhatsApp with pre-filled message
            const whatsappUrl = `https://wa.me/917990224791?text=${whatsappMessage}`;
            window.open(whatsappUrl, '_blank');
            
            // Track WhatsApp click with Google Analytics
            gtag('event', 'whatsapp_click', {
                'event_category': 'Contact',
                'event_label': 'WhatsApp Message',
                'value': 1
            });
            
            // Track form submission
            gtag('event', 'form_submit', {
                'event_category': 'Contact',
                'event_label': 'Contact Form'
            });
        });
    }

    // Lazy Loading Images (if not using native lazy loading)
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for fade-in effect
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(section);
    });

    // Performance: Preload critical resources
    function preloadResource(href, as) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
    }

    // Add loading class to body for CSS transitions
    document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('loaded');
    });

    // Service Worker Registration (for PWA capabilities)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registered:', registration);
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed:', error);
                });
        });
    }


    // Hero Carousel Functionality
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselDots = document.querySelectorAll('.dot');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    let currentSlide = 0;
    let carouselInterval;

    function showSlide(index) {
        carouselSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        carouselDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % carouselSlides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(prev);
    }

    function startCarousel() {
        carouselInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    if (carouselNext && carouselPrev && carouselSlides.length > 0) {
        carouselNext.addEventListener('click', () => {
            nextSlide();
            stopCarousel();
            startCarousel();
        });

        carouselPrev.addEventListener('click', () => {
            prevSlide();
            stopCarousel();
            startCarousel();
        });

        carouselDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                stopCarousel();
                startCarousel();
            });
        });

        // Pause on hover
        const carousel = document.querySelector('.hero-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', stopCarousel);
            carousel.addEventListener('mouseleave', startCarousel);
        }

        // Start carousel
        startCarousel();
    }

    // Console message
    console.log('%cShivam Curtain', 'color: #ff6f00; font-size: 20px; font-weight: bold;');
    console.log('%cWebsite loaded successfully!', 'color: #00c853; font-size: 14px;');

})();

// Gallery Modal Functions (Global scope for onclick handlers)
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Track gallery image view
        gtag('event', 'gallery_view', {
            'event_category': 'Gallery',
            'event_label': imageSrc,
            'value': 1
        });
        
        // Add keyboard support
        document.addEventListener('keydown', handleModalKeydown);
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        
        // Remove keyboard support
        document.removeEventListener('keydown', handleModalKeydown);
    }
}

function handleModalKeydown(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});

