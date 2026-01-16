lucide.createIcons();

// --- CURSEUR & PROGRESS ---
const cursor = document.querySelector("#custom-cursor");
const follower = document.querySelector("#cursor-follower");
const progressBar = document.querySelector("#progress-bar");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(follower, { x: e.clientX - 12, y: e.clientY - 12, duration: 0.3 });
    
    let scroll = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if(progressBar) progressBar.style.width = scroll + "%";
});

// Effet de survol générique
document.querySelectorAll('a, button, .acc-header, .clickable-card').forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('is-red'));
    el.addEventListener('mouseleave', () => follower.classList.remove('is-red'));
});

// --- ACCORDÉONS ---
document.querySelectorAll('.acc-header').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');
        
        // Ferme les autres accordéons
        document.querySelectorAll('.acc-item').forEach(other => {
            other.classList.remove('active');
            other.querySelector('.acc-body').style.display = 'none';
        });

        // Toggle l'actuel
        if (!isActive) {
            item.classList.add('active');
            item.querySelector('.acc-body').style.display = 'block';
        }
    });
});

// --- GESTION DES MODALES (Infos & Contact) ---
const globalModal = document.querySelector("#global-modal");
const contactModal = document.querySelector("#contact-modal");
const modalContent = document.querySelector("#modal-content");

// Contenu des modales Formations/Certifs
const details = {
    edu_data: "<h3>Data Analyst (2025)</h3><p>Spécialisation en analyse de données, SQL, Python et visualisation de données (PowerBI/Tableau).</p>",
    edu_lion: "<h3>Product Academy (2024)</h3><p>Immersion intensive sur la culture Product : Discovery, Delivery, Growth et Stratégie.</p>",
    edu_web: "<h3>Chef de Projet Web (2020)</h3><p>Formation Fullstack (React/Node) et gestion de projet Agile.</p>",
    cert_scrum: "<h3>Scrum Master</h3><p>Certification sur la maîtrise des rituels Agiles et l'animation d'équipes de développement.</p>",
    cert_rgpd: "<h3>Atelier RGPD - CNIL</h3><p>Formation aux principes fondamentaux de la protection des données personnelles.</p>",
    vol_crf: "<h3>Croix-Rouge française</h3><p>Plus de 10 ans d'engagement. Management d'équipes et pilotage de la transformation digitale des formations.</p>"
};

// Ouvrir modale info
document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (details[id]) {
            modalContent.innerHTML = details[id];
            globalModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Fermer les modales
document.querySelectorAll('#close-modal, .modal-overlay').forEach(el => {
    el.addEventListener('click', () => {
        globalModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

const contactBtn = document.querySelector("#open-contact");
const contactText = document.querySelector("#contact-text");
const email = "cedric.alinc.pro@gmail.com";

contactBtn.addEventListener('click', () => {
    // 1. Copie immédiate dans le presse-papier
    navigator.clipboard.writeText(email).then(() => {
        
        // 2. Feedback visuel sur le bouton
        const originalText = contactText.innerText;
        contactText.innerText = "Email copié dans le presse-papier !";
        contactBtn.classList.replace('bg-blue-600', 'bg-green-600');
        
        // 3. Tentative d'ouverture du client mail
        // On le fait après un léger délai pour ne pas bloquer le script de copie
        setTimeout(() => {
            window.location.href = `mailto:${email}?subject=Contact via Portfolio`;
        }, 100);

        // 4. Remise à zéro du bouton après 3 secondes
        setTimeout(() => {
            contactText.innerText = originalText;
            contactBtn.classList.replace('bg-green-600', 'bg-blue-600');
        }, 3000);
    });
});
