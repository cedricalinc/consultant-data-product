document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // --- SÉLECTION DES ÉLÉMENTS DU CURSEUR ---
    const cursor = document.querySelector("#custom-cursor");
    const follower = document.querySelector("#cursor-follower");
    const progressBar = document.querySelector("#progress-bar");

    // --- DÉTECTION TACTILE ---
    const isTouchDevice = () => {
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    };

    // Si tactile : on cache, sinon on anime
    if (isTouchDevice()) {
        if(cursor) cursor.style.display = "none";
        if(follower) follower.style.display = "none";
        document.documentElement.style.setProperty('--cursor-visibility', 'auto');
    } else {
        window.addEventListener("mousemove", (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(follower, { x: e.clientX - 12, y: e.clientY - 12, duration: 0.3 });
            
            let scroll = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if(progressBar) progressBar.style.width = scroll + "%";
        });
    }

    // Effet de survol (uniquement si follower existe)
    if(follower) {
        document.querySelectorAll('a, button, .acc-header, .clickable-card').forEach(el => {
            el.addEventListener('mouseenter', () => follower.classList.add('is-red'));
            el.addEventListener('mouseleave', () => follower.classList.remove('is-red'));
        });
    }

    // --- ACCORDÉONS ---
    document.querySelectorAll('.acc-header').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            
            document.querySelectorAll('.acc-item').forEach(other => {
                other.classList.remove('active');
                other.querySelector('.acc-body').style.display = 'none';
            });

            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.acc-body').style.display = 'block';
            }
        });
    });

    // --- GESTION DES MODALES ---
    const globalModal = document.querySelector("#global-modal");
    const modalContent = document.querySelector("#modal-content");
    const details = {
        edu_data: "<h3>Data Analyst (2025)</h3><p>Analyse de données, SQL, Python, PowerBI/Tableau.</p>",
        edu_lion: "<h3>Product Academy (2024)</h3><p>Discovery, Delivery, Growth et Stratégie.</p>",
        edu_web: "<h3>Chef de Projet Web (2020)</h3><p>Formation Fullstack et Agilité.</p>",
        cert_scrum: "<h3>Scrum Master</h3><p>Certification Agilité.</p>",
        cert_rgpd: "<h3>Atelier RGPD</h3><p>Principes CNIL.</p>",
        vol_crf: "<h3>Croix-Rouge française</h3><p>Management et Transformation digitale.</p>"
    };

    document.querySelectorAll('.clickable-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            if (details[id] && globalModal) {
                modalContent.innerHTML = details[id];
                globalModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    document.querySelectorAll('#close-modal, .modal-overlay').forEach(el => {
        el.addEventListener('click', () => {
            globalModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // --- CONTACT HYBRIDE ---
    const contactBtn = document.querySelector("#open-contact");
    const contactText = document.querySelector("#contact-text");
    const email = "cedric.alinc.pro@gmail.com";

    if(contactBtn) {
        contactBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(email).then(() => {
                const originalText = contactText.innerText;
                contactText.innerText = "Email copié !";
                contactBtn.classList.replace('bg-blue-600', 'bg-green-600');
                
                setTimeout(() => {
                    window.location.href = `mailto:${email}?subject=Contact via Portfolio`;
                }, 100);

                setTimeout(() => {
                    contactText.innerText = originalText;
                    contactBtn.classList.replace('bg-green-600', 'bg-blue-600');
                }, 3000);
            });
        });
    }

    // --- ANIMATION COMPTEURS ---
    if(window.gsap && window.ScrollTrigger) {
        gsap.from(".metric-card", {
            scrollTrigger: {
                trigger: ".metric-card",
                start: "top 85%",
            },
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        });
    }
});
