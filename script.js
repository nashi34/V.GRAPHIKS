// Mobile Menu Toggle
(function() {
    // Scoped variables and helpers
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('main-nav');
    const languageToggle = document.getElementById('languageToggle');

    const translations = {
        en: {
            navHome: 'Home',
            navServices: 'Services',
            navPortfolio: 'Portfolio',
            navAbout: 'About',
            navContact: 'Contact',
            heroTitlePrefix: 'Creative Design',
            heroTitleHighlight: 'Solutions',
            heroSubtitle: 'Transform your vision into stunning digital experiences with cutting-edge design',
            ctaGetStarted: 'Get Started',
            servicesTitle: 'Our Services',
            service1Title: 'UI/UX Design',
            service1Text: 'Beautiful, intuitive interfaces that users love. We craft experiences that engage and delight.',
            service2Title: 'Web Development',
            service2Text: 'Modern, responsive websites built with the latest technologies and best practices.',
            service3Title: 'Motion Graphics',
            service3Text: 'Dynamic animations and video content that bring your brand to life.',
            service4Title: 'Mobile Apps',
            service4Text: 'Cross-platform applications designed for performance and user engagement.',
            service5Title: 'Branding',
            service5Text: 'Comprehensive brand identity solutions that make your business stand out.',
            service6Title: 'Analytics & SEO',
            service6Text: 'Data-driven strategies to boost your online visibility and performance.',
            portfolioTitle: 'Recent Projects',
            portfolio1Title: 'E-Commerce Platform',
            portfolio1Text: 'Modern shopping experience with seamless checkout',
            portfolio2Title: 'SaaS Dashboard',
            portfolio2Text: 'Intuitive analytics dashboard for data insights',
            portfolio3Title: 'Mobile App Design',
            portfolio3Text: 'Native iOS and Android applications',
            aboutTitle: 'About V.GRAPHIKS',
            aboutPara1: 'V.GRAPHIKS is a forward-thinking design studio dedicated to creating exceptional digital experiences. With a passion for innovation and a commitment to excellence, we help businesses transform their ideas into reality.',
            aboutPara2: 'Our team of talented designers, developers, and creators work collaboratively to deliver solutions that not only look stunning but also perform exceptionally.',
            stat1Label: 'Projects Completed',
            stat2Label: 'Happy Clients',
            stat3Label: 'Awards Won',
            contactTitle: 'Get In Touch',
            contactSubtitle: 'Have a project in mind? Let\'s create something amazing together.',
            contactNamePlaceholder: 'Your Name',
            contactEmailPlaceholder: 'Your Email',
            contactMessagePlaceholder: 'Your Message',
            ctaSendMessage: 'Send Message',
            footerCopy: '© 2024 V.GRAPHIKS. All rights reserved.',
            footerOwner: 'Diogo "Jiggls" Duarte is the owner of V.GRAPHIKS.'
        },
        pt: {
            navHome: 'Início',
            navServices: 'Serviços',
            navPortfolio: 'Portfólio',
            navAbout: 'Sobre',
            navContact: 'Contacto',
            heroTitlePrefix: 'Design Criativo',
            heroTitleHighlight: 'Soluções',
            heroSubtitle: 'Transforme a sua visão em experiências digitais impressionantes com design inovador',
            ctaGetStarted: 'Começar',
            servicesTitle: 'Os nossos Serviços',
            service1Title: 'Design UI/UX',
            service1Text: 'Interfaces bonitas e intuitivas que os usuários adoram. Criamos experiências que engajam e encantam.',
            service2Title: 'Desenvolvimento Web',
            service2Text: 'Sites modernos e responsivos construídos com as tecnologias e práticas mais recentes.',
            service3Title: 'Motion Graphics',
            service3Text: 'Animações dinâmicas e conteúdo em vídeo que trazem a sua marca à vida.',
            service4Title: 'Apps Móveis',
            service4Text: 'Aplicações multiplataforma projetados para desempenho e engajamento.',
            service5Title: 'Branding',
            service5Text: 'Soluções completas de identidade de marca que fazem a sua empresa destacar-se.',
            service6Title: 'Analytics e SEO',
            service6Text: 'Estratégias orientadas por dados para impulsionar a sua visibilidade e desempenho online.',
            portfolioTitle: 'Projetos Recentes',
            portfolio1Title: 'Plataforma de E-commerce',
            portfolio1Text: 'Experiência de compra moderna com checkout fluído',
            portfolio2Title: 'Dashboard SaaS',
            portfolio2Text: 'Painel de análises intuitivo para insights de dados',
            portfolio3Title: 'Design de App Móvel',
            portfolio3Text: 'Aplicações nativas para iOS e Android',
            aboutTitle: 'Sobre a V.GRAPHIKS',
            aboutPara1: 'A V.GRAPHIKS é um estúdio de design visionário dedicado a criar experiências digitais excepcionais. Com paixão pela inovação e compromisso com a excelência, ajudamos empresas a transformar ideias em realidade.',
            aboutPara2: 'A nossa equipa de designers, desenvolvedores e criadores talentosos trabalha de forma colaborativa para oferecer soluções que não apenas impressionam no visual, mas também apresentam desempenho excepcional.',
            stat1Label: 'Projetos Concluídos',
            stat2Label: 'Clientes Satisfeitos',
            stat3Label: 'Prémios Recebidos',
            contactTitle: 'Entre em Contacto',
            contactSubtitle: 'Tem um projeto em mente? Vamos criar algo incrível juntos.',
            contactNamePlaceholder: 'O seu Nome',
            contactEmailPlaceholder: 'O seu Email',
            contactMessagePlaceholder: 'A sua Mensagem',
            ctaSendMessage: 'Enviar Mensagem',
            footerCopy: '© 2024 V.GRAPHIKS. Todos os direitos reservados.',
            footerOwner: 'Diogo "Jiggls" Duarte é o proprietário da V.GRAPHIKS.'
        }
    };

    function translatePage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('siteLanguage', lang);
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key] !== undefined) {
                el.textContent = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang][key] !== undefined) {
                el.placeholder = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.dataset.i18nAria;
            if (translations[lang][key] !== undefined) {
                el.setAttribute('aria-label', translations[lang][key]);
            }
        });
        if (languageToggle) {
            languageToggle.textContent = lang === 'en' ? 'EN / PT' : 'PT / EN';
            languageToggle.setAttribute('aria-label', lang === 'en' ? 'Mudar para Português' : 'Switch to English');
        }
    }

    function applySavedLanguage() {
        const savedLang = localStorage.getItem('siteLanguage') || 'en';
        translatePage(savedLang);
    }

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('siteLanguage') || document.documentElement.lang || 'en';
            translatePage(currentLang === 'en' ? 'pt' : 'en');
        });
    }

    applySavedLanguage();

    function toggleMenu() {
        if (!navLinks || !hamburger) return;
        const isActive = navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    }

    if (hamburger) {
        hamburger.addEventListener('click', () => toggleMenu());
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });

        // Close menu when a link is clicked
        document.querySelectorAll('#main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks) navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Debounced scroll handling for navbar and parallax
function debounce(fn, wait = 20) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

const handleScroll = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(7, 26, 61, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(56, 189, 248, 0.1)';
        } else {
            navbar.style.background = 'rgba(7, 26, 61, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }

    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
}, 16);

window.addEventListener('scroll', handleScroll);

// Intersection Observer for Section Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards and portfolio items
document.querySelectorAll('.service-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Simple validation
        if (name && email && message) {
            // Show success message
            showNotification('Thank you! Your message has been sent successfully.', 'success');

            // Reset form
            contactForm.reset();
        } else {
            showNotification('Please fill in all fields.', 'error');
        }
    });
}

// Notification System
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '8px',
        backgroundColor: type === 'success' ? '#22c55e' : '#ff3b3b',
        color: 'white',
        zIndex: '9999',
        animation: 'slideIn 0.3s ease-out',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
        fontWeight: '500'
    });

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// (Moved slideIn/slideOut keyframes into CSS for cleanliness)

// Counter Animation for Stats Section
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    let countersTriggered = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersTriggered) {
                countersTriggered = true;
                stats.forEach(stat => {
                    const target = parseInt(stat.textContent) || 0;
                    const increment = Math.max(1, Math.floor(target / 50));
                    let current = 0;

                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target + '+';
                            clearInterval(counter);
                        } else {
                            stat.textContent = Math.floor(current) + '+';
                        }
                    }, 30);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }
}

animateCounters();

// CTA Button Click Animation
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple';

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add fade-in animation on page load
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section');
    elements.forEach((el, index) => {
        el.style.opacity = '0.95';
        el.style.transition = 'opacity 0.6s ease-out';
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
});

// Service Card Hover Effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Portfolio Item Hover Effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

})();
