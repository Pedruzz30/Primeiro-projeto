document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // Configurações Iniciais e Variáveis Globais
    // =============================================
    const body = document.body;
    const navContainer = document.querySelector('.nav-container');
    const menuButton = document.querySelector('.menu-mobile');
    const navMenu = document.querySelector('.nav-menu');
    const allSections = document.querySelectorAll('section');
    const contactForm = document.querySelector('.contact-form');
    const socialMediaLinks = document.querySelectorAll('.social-media a');
    const logos = document.querySelectorAll('.logo img, .hero-logo img, .footer-logo img');
    const ctaButton = document.querySelector('.cta-button');
    
    // =============================================
    // Funções de Utilidade
    // =============================================
    
    // Verifica se um elemento está visível na viewport
    function isInViewport(element, threshold = 0.1) {
        const rect = element.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= -viewHeight * threshold);
    }
    
    // Atualiza links ativos do menu conforme scroll
    function updateActiveMenuLink() {
        const scrollPosition = window.scrollY + 100;
        
        allSections.forEach(section => {
            const sectionId = section.getAttribute('id');
            const sectionLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
            
            if (sectionLink) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    sectionLink.classList.add('active');
                } else {
                    sectionLink.classList.remove('active');
                }
            }
        });
    }

    // Configura efeitos hover para elementos interativos
    function setupHoverEffects() {
        // Efeito hover para ícones sociais
        socialMediaLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    scale: 1.15,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
        
        // Efeito hover para logos
        logos.forEach(logo => {
            logo.addEventListener('mouseenter', () => {
                gsap.to(logo, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "back.out(2)"
                });
            });
            
            logo.addEventListener('mouseleave', () => {
                gsap.to(logo, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
        
        // Efeito hover para botão CTA
        if (ctaButton) {
            ctaButton.addEventListener('mouseenter', () => {
                gsap.to(ctaButton, {
                    scale: 1.05,
                    duration: 0.3
                });
            });
            
            ctaButton.addEventListener('mouseleave', () => {
                gsap.to(ctaButton, {
                    scale: 1,
                    duration: 0.3
                });
            });
        }
    }
    
    // =============================================
    // Configuração do GSAP e Animações
    // =============================================
    
    // Inicializa todas as animações
    function initAnimations() {
        if (typeof gsap !== 'undefined') {
            // Animação para a logo do header
            gsap.from('.logo img', {
                opacity: 0,
                y: -20,
                duration: 1,
                delay: 0.5
            });
            
            // Animação para a logo do hero
            gsap.from('.hero-logo', {
                opacity: 0,
                y: -50,
                duration: 1.5,
                ease: 'elastic.out(1, 0.5)',
                delay: 0.8
            });
            
            // Animação para elementos do hero
            gsap.from(['.hero-title', '.hero-subtitle'], {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.2,
                delay: 0.5
            });
            
            // Animação flutuante para elementos
            gsap.to(['#fanta', '.glass-image', '#laranja'], {
                y: 20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            
            // Animação de scroll para seção "two"
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".two",
                    start: "0% 95%",
                    end: "70% 50%",
                    scrub: true,
                }
            });
            
            tl.to('#fanta', { top: '120%', left: '0%' }, 'orange')
              .to('#laranja-cortada', { top: '160%', left: '23%' }, 'orange')
              .to('#laranja', { width: '15%', top: '160%', right: '10%' }, 'orange')
              .to('#folha', { top: '110%', rotate: '530deg', left: '70%' }, 'orange')
              .to('#folha2', { top: '110%', rotate: '530deg', left: '0%' }, 'orange');
            
            // Animação de scroll para seção "three"
            var tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".three",
                    start: "0% 95%",
                    end: "20% 50%",
                    scrub: true,
                }
            });
            
            tl2.from('.lemon1', { rotate: '-90deg', top: '100%', left: '-110%' }, 'ca')
               .from('#cocacola', { rotate: '-90deg', top: '100%', left: '-110%' }, 'ca')
               .from('.lemon2', { rotate: '90deg', top: '100%', left: '110%' }, 'ca')
               .from('#pepsi', { rotate: '90deg', top: '100%', left: '110%' }, 'ca')
               .to('#laranja-cortada', { width: '18%', top: '204%', left: '41.5%' }, 'ca')
               .to('#fanta', { width: '35%', top: '210%', left: '33%' }, 'ca');
            
            // Animação de entrada para cards
            gsap.utils.toArray('.card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: i * 0.1
                });
            });
            
            // Animação para ícones sociais
            gsap.utils.toArray('.social-media a').forEach((icon, i) => {
                gsap.from(icon, {
                    scrollTrigger: {
                        trigger: ".contact-info",
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    delay: 0.2 + i * 0.1
                });
            });
            
            // Animação para logo do footer
            gsap.from('.footer-logo img', {
                scrollTrigger: {
                    trigger: ".footer",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                rotation: -10,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)'
            });
        }
    }
    
    // =============================================
    // Event Listeners e Interatividade
    // =============================================
    
    // Menu mobile
    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuButton.classList.toggle('active');
        body.classList.toggle('no-scroll');
        
        // Animação do menu mobile
        if (navMenu.classList.contains('active')) {
            gsap.from('.nav-menu a', {
                opacity: 0,
                x: -20,
                duration: 0.3,
                stagger: 0.1
            });
        }
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuButton.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
    
    // Efeito de scroll na navegação
    window.addEventListener('scroll', function() {
        updateActiveMenuLink();
        
        if (window.scrollY > 50) {
            navContainer.classList.add('scrolled');
            gsap.to('.logo img', {
                scale: 0.9,
                duration: 0.3
            });
        } else {
            navContainer.classList.remove('scrolled');
            gsap.to('.logo img', {
                scale: 1,
                duration: 0.3
            });
        }
    });
    
    // Formulário de contato
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    gsap.to(input, {
                        x: [-5, 5, -5, 5, 0],
                        duration: 0.4,
                        ease: "power1.out"
                    });
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.textContent = 'Enviando...';
                submitButton.disabled = true;
                
                // Animação de loading
                gsap.to(submitButton, {
                    backgroundColor: '#4CAF50',
                    duration: 0.3
                });
                
                setTimeout(() => {
                    submitButton.textContent = 'Enviado com Sucesso!';
                    gsap.to(submitButton, {
                        scale: 1.05,
                        duration: 0.2,
                        yoyo: true,
                        repeat: 1
                    });
                    
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                        contactForm.reset();
                        gsap.to(submitButton, {
                            backgroundColor: '#ff5500',
                            duration: 0.3
                        });
                    }, 2000);
                }, 1500);
            }
        });
    }
    
    // Efeito hover nos cards de produto
    document.querySelectorAll('.card').forEach(card => {
        const productImage = card.querySelector('.product-image img:not(.lemon)');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                duration: 0.3
            });
            
            if (productImage) {
                gsap.to(productImage, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                duration: 0.3
            });
            
            if (productImage) {
                gsap.to(productImage, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // =============================================
    // Inicializações
    // =============================================
    updateActiveMenuLink();
    setupHoverEffects();
    initAnimations();
    
    // Observador de interseção para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.card, .contact-item, .feature, .social-media a, .hero-logo').forEach(el => {
        observer.observe(el);
    });
    
    // Carrega o GSAP se não estiver carregado
    if (typeof gsap === 'undefined') {
        const gsapScript = document.createElement('script');
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        document.head.appendChild(gsapScript);
        
        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        document.head.appendChild(scrollTriggerScript);
        
        gsapScript.onload = scrollTriggerScript.onload = function() {
            if (typeof gsap !== 'undefined') {
                window.dispatchEvent(new Event('DOMContentLoaded'));
            }
        };
    }
});