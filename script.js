/* ==========================================================================
   1. DONNÉES (RECOMMANDATIONS & EXPÉRIENCES)
   ========================================================================== */

const recs = [
    { 
        n: "Mahé BANDEIRA DE VIVAR", 
        r: "Chef de projet - iPorta", 
        t: "Cédric est quelqu'un de très organisé, très réactif et vif d'esprit. J'ai apprécié sa qualité de travail.", 
        img: "https://media.licdn.com/dms/image/v2/D4E03AQF-qGvOqZCa6Q/profile-displayphoto-shrink_100_100/B4EZb80nHNHIAU-/0/1747998373569?e=1770249600&v=beta&t=x1E33hJYt9bW8ZleLlg669bMmXwwsKRA7oOVoPIhq78", 
        lien: "https://www.linkedin.com/in/mahe-de-vivar/" 
    },
    { 
        n: "Damya BOUKHEMAL", 
        r: "Product Owner - CFA Numia", 
        t: `J’ai beaucoup apprécié travailler avec Cédric. Son expérience et sa vision ont apporté une réelle plus value à notre équipe. Au-delà de ses solides compétences professionnelles, c’est un manager qui sait les mettre en œuvre avec efficacité et surtout les partager avec son équipe. J’ai personnellement beaucoup appris à ses côtés, tant sur le plan technique que méthodologique. Son sens du collectif, sa capacité à accompagner et à faire monter les autres en compétences font de lui un professionnel fiable et engagé.`, 
        img: "https://media.licdn.com/dms/image/v2/D4E03AQGSetwnwBe-9w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1686747440629?e=1770249600&v=beta&t=emrdqqW3z5ceMDb-_t8eCcywMYJuZQZppFUs67SBb7U", 
        lien: "https://www.linkedin.com/in/damya-boukhemal/" 
    },
    { n: "Sophie L.", r: "Directrice ESS", t: "Rigueur et engagement exceptionnels sur nos projets SI.", img: "https://i.pravatar.cc/100?u=3", lien: "#" },
    { n: "Thomas B.", r: "Lead Data Engineer", t: "Ses architectures dbt sont propres, scalables et bien documentées.", img: "https://i.pravatar.cc/100?u=4", lien: "#" },
    { n: "Inès R.", r: "CEO @ GreenTech", t: "Efficacité redoutable sur l'automatisation No-code.", img: "https://i.pravatar.cc/100?u=5", lien: "#" },
    { n: "Kevin L.", r: "Senior PO", t: "Sait parfaitement traduire le business en specs techniques.", img: "https://i.pravatar.cc/100?u=6", lien: "#" },
    { n: "Amélie K.", r: "Consultante RH", t: "La gamification de nos outils a boosté l'onboarding.", img: "https://i.pravatar.cc/100?u=7", lien: "#" },
    { n: "Paul W.", r: "Product Manager", t: "Un expert de l'Agilité Scrum et de la roadmap valeur.", img: "https://i.pravatar.cc/100?u=8", lien: "#" },
    { n: "Claire G.", r: "Operations Manager", t: "Gain de temps de 30% grâce à ses automatisations Make.", img: "https://i.pravatar.cc/100?u=9", lien: "#" },
    { n: "Jean-Luc M.", r: "DF", t: "Maîtrise parfaite des flux SI complexes et critiques.", img: "https://i.pravatar.cc/100?u=10", lien: "#" }
];

const exps = {
    'malin': {
        h: "Programme Malin",
        t: "Accompagnement stratégique et technologique",
        missions: ["Interviews métiers", "Création d'un Intranet", "SI pour le suivi projet et BUJO"],
        impacts: ["Amélioration du pilotage des projets", "Optimisation du pilotage des Business Units"]
    },
    'numia': {
        h: "CFA numiA",
        t: "Product Manager, Directeur",
        missions: ["Transformation numérique", "Optimisation des processus", "Pilotage de direction"],
        impacts: ["Gain de productivité de 50% sur l'administratif alternance", "Simplification d'usage et de pilotage pour 15K users","Tableaux de bords interactifs"]
    },
    'clemence': {
        h: "Clémence Consulting",
        t: "Consultant Product Owner",
        missions: ["Optimisation de processus financiers","Rédaction spécifications SI", "Pilotage des développements","Pilotage d'outils SI"],
        impacts: ["Fiabilisation des flux critiques", "Accélération des cycles de facturation","Pilotage sécurisé de millions d'€uros de budget Immo"]
    },
    'visiativ': {
        h: "Iporta - Visiativ",
        t: "Ingénieur Développement",
        missions: ["Développement de fonctionnalités spécifiques", "Création d'un parcours gamifié pour les nouveaux employés"],
        impacts: ["Fonctionnalités sur-mesure pour les clients", "Sentiment d'accueil positif supérieur de 50%"]
    },
    'crf': {
        h: "Croix-Rouge française",
        t: "Product Manager/Chef de projet SI",
        missions: ["Pilotage SI pour 60 000 utilisateurs","Mise en place de tableaux de bords", "Dématérialisation factures fournisseurs"],
        impacts: ["Des millions d'heures de bénévolat actives", "Tableaux de bords remplis par le terrain directement", "Délai de traitement des factures réduit de 70%"]
    },
    'histo': {
        h: "Historique",
        t: "Parcours 2006 - 2013",
        missions: [
            "2006 : BNP - CDD <br>Episodique Procurement",
            "2007 : Edu-Performance Canada <br>Stage Comptabilité",
            "2007 : ESSEC - CDD <br>Formation Intra",
            "2007 : Assurances BRED - CDD <br>Gestionnaire",
            "2008 : Armée de l'Air - Stage <br>Ressources Humaines",
            "2009-2010 : Plateforme du Bâtiment (Saint-Gobain) - Alternance <br>Contrôleur de Gestion",
            "2011 - 2013 : Croix-Rouge - CDD <br>Secouriste professionnel",
            "2013 : Cedeo (Saint-Gobain) - CDI <br>Gestionnaire Stock et Offre"],
        impacts: ["Parcours formateur multi-directions en back et front office"]
    }
};
// Mise à jour du compteur
const countElement = document.getElementById('reco-count');
if(countElement) {
    countElement.innerText = recs.length;
}

/* ==========================================================================
   2. INJECTION & CAROUSEL RECOMMANDATIONS
   ========================================================================== */

const track = document.getElementById('recoTrack');
if(track) {
    track.innerHTML = recs.map(r => `
        <div class="reco-card">
            <div style="display:flex;align-items:center;gap:15px;margin-bottom:15px">
                <div class="pulse-container">
                    <img src="${r.img}" class="pulse-img" style="width:45px; height:45px; border-radius:50%; border: 1px solid var(--border); object-fit: cover;">
                </div>
                <div>
                    <h4 style="color:var(--white);font-size:0.9rem;margin:0">${r.n}</h4>
                    <p style="font-size:0.65rem;color:var(--blue);font-weight:700;margin:0;text-transform:uppercase">${r.r}</p>
                </div>
            </div>
            <p style="font-size:0.85rem;font-style:italic;color:var(--text);line-height:1.5">"${r.t}"</p>
            <a href="${r.lien}" target="_blank" style="display:block;margin-top:10px;font-size:0.65rem;color:var(--blue);text-decoration:none;font-weight:600">Profil LinkedIn ↗</a>
        </div>
    `).join('');
}

function scrollR(d) {
    if(!track) return;
    const card = track.querySelector('.reco-card');
    if(card) {
        const cardWidth = card.offsetWidth + 20;
        track.scrollBy({ left: d * cardWidth, behavior: 'smooth' });
    }
}

/* ==========================================================================
   3. GESTION DES MODALES (EXPÉRIENCES & LÉGAL)
   ========================================================================== */

function openM(id) {
    const data = exps[id];
    if(!data) return;

    const missionsHTML = data.missions.map(m => `<li>${m}</li>`).join('');
    const impactsHTML = data.impacts ? `
        <div class="modal-section impact-box">
            <h4><i data-lucide="trending-up" class="modal-icon"></i> Impacts</h4>
            <ul class="modal-list">${data.impacts.map(i => `<li><strong>${i}</strong></li>`).join('')}</ul>
        </div>` : '';

    document.getElementById('m-body').innerHTML = `
        <div class="modal-header">
            <h2 class="highlight">${data.h}</h2>
            <h3>${data.t}</h3>
        </div>
        <div class="modal-section">
            <h4><i data-lucide="target" class="modal-icon"></i> Missions</h4>
            <ul class="modal-list">${missionsHTML}</ul>
        </div>
        ${impactsHTML}
        <button onclick="closeM()" class="modal-close-btn">Fermer</button>
    `;
    
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    const content = modal.querySelector('.modal-content');
    if(content) content.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeM() { 
    document.getElementById('modal').style.display = 'none'; 
    document.body.style.overflow = 'auto';
}

function openLegal() { document.getElementById('modal-legal').style.display = 'flex'; }
function closeLegal() { document.getElementById('modal-legal').style.display = 'none'; }

// Fermeture au clic sur le fond (overlay)
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

/* ==========================================================================
   4. ACTIONS UTILISATEURS (MAIL & THEME)
   ========================================================================== */

function handleMailClick(event, email) {
    navigator.clipboard.writeText(email).then(() => {
        const btn = document.getElementById('emailBtn');
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check"></i> <span>Mail copié !</span>';
        btn.style.background = "#059669";
        lucide.createIcons();
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.background = "";
            lucide.createIcons();
        }, 2500);
    });
}

// --- GESTION DU THÈME (VERSION CORRIGÉE) ---
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // On change l'icône à l'intérieur du bouton
    const newIconName = (theme === 'light') ? 'moon' : 'sun';
    
    // On force la réécriture du HTML interne pour être sûr que Lucide le voit
    themeToggle.innerHTML = `<i data-lucide="${newIconName}"></i>`;
    
    // On demande à Lucide de transformer le <i> en icône
    lucide.createIcons();
}

// Initialisation au chargement
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'light' ? 'dark' : 'light');
});

// Lancement final des icônes pour le reste de la page
lucide.createIcons();
