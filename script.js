/* ==========================================================================
   1. DONNÉES (RECOMMANDATIONS & EXPÉRIENCES)
   ========================================================================== */

const recs = [
    { 	
	n: "Florent VALLÉE", 
	r: "Directeur de l'urgence et des opérations - CRf", 
	t: `Cedric est un Chef de projet engagé, à l'<strong>écoute des besoins</strong> des utilisateurs finaux.<br><br> Son <strong>dynamisme</strong>, sa <strong>créativité </strong>et son <strong>engagement </strong>font sa difference`, 
	img: "https://media.licdn.com/dms/image/v2/C4D03AQHkBheE0s6K2g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1568715661165?e=1770854400&v=beta&t=ZcyExSNEKq8U2FwhyWn22YjUUN8Y_UoE6SLzhax6hGo", 
	lien: "https://www.linkedin.com/in/florent-vall%C3%A9e-b13a8b116",
	tags: ["Product", "User-Centric", "SoftSkills"]
    },
    { 	n: "Emma HEDEF", 
	r: "Directrice Digital et Marketing - Programme Malin", 
	t: `Je tiens à partager un retour très positif sur l’accompagnement de Cédric en tant que Product Manager auprès de notre association Programme Malin. 

<br><br>Il nous a aidés à concevoir un espace de travail centralisé sur Notion, inspiré de la méthode Bullet Journal, pour mieux <strong>aligner la vision</strong>, <strong>clarifier </strong>les rôles, <strong>prioriser </strong>efficacement et <strong>fluidifier</strong> la collaboration entre plusieurs intervenants. 

<br><br>Au-delà des outils, j’ai particulièrement apprécié sa <strong>pédagogie</strong>, sa <strong>patience</strong> et la <strong>pertinence de ses recommandations</strong>.

<br><br> Il a su <strong>structurer des besoins complexes sans les alourdir</strong>, et <strong>accompagner les équipes</strong> vers plus de clarté et d’autonomie dès les premières semaines. <br><br>Un <strong>accompagnement à la fois structurant, pragmatique et humain</strong>, que je recommande sans hésiter.`, 
	img: "https://media.licdn.com/dms/image/v2/D4E03AQEjc-q-46qK6g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1696520482442?e=1770854400&v=beta&t=Vw5KoSj0Us7Vdib9SlNeoJNFurM3UDkVj_CVIkcdR0A", 
	lien: "https://www.linkedin.com/in/emma-hedef",
	tags: ["Workflow", "Product", "User-Centric", "Pédagogie", "SoftSkills"] 
    },
    { 
        n: "Mahé BANDEIRA DE VIVAR", 
        r: "Chef de projet - iPorta", 
        t: "Cédric est quelqu'un de très <strong>organisé</strong>, très <strong>réactif </strong>et <strong>vif d'esprit</strong>. <br><br>J'ai apprécié sa <strong>qualité de travail</strong>.", 
        img: "https://media.licdn.com/dms/image/v2/D4E03AQF-qGvOqZCa6Q/profile-displayphoto-shrink_100_100/B4EZb80nHNHIAU-/0/1747998373569?e=1770249600&v=beta&t=x1E33hJYt9bW8ZleLlg669bMmXwwsKRA7oOVoPIhq78", 
        lien: "https://www.linkedin.com/in/mahe-de-vivar/",
 	tags: ["Organisation", "Réactivité", "Product"]
    },
    { 
        n: "Damya BOUKHEMAL", 
        r: "Product Owner - CFA Numia", 
        t: `J’ai beaucoup apprécié travailler avec Cédric.<br> <br>Son <strong>expérience </strong>et sa <strong>vision </strong>ont apporté une réelle plus value à notre équipe.<br> <br>Au-delà de ses <strong>solides compétences professionnelles</strong>, c’est un manager qui sait les mettre en œuvre avec <strong>efficacité </strong>et surtout les <strong>partager avec son équipe</strong>. <br>J’ai personnellement beaucoup appris à ses côtés, tant sur le plan technique que méthodologique. <br><br>Son <strong>sens du collectif</strong>, sa capacité à <strong>accompagner</strong> et à <strong>faire monter les autres en compétences</strong> font de lui un <strong>professionnel fiable et engagé</strong>.`, 
        img: "https://media.licdn.com/dms/image/v2/D4E03AQGSetwnwBe-9w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1686747440629?e=1770249600&v=beta&t=emrdqqW3z5ceMDb-_t8eCcywMYJuZQZppFUs67SBb7U", 
        lien: "https://www.linkedin.com/in/damya-boukhemal/",
	tags: ["Management", "Mentoring", "Product"] 
    },
    { 	n: "Ludovic LEVY", 
	r: "Pilote Google Workspace Accompagnement et Gouvernance - CRf", 
	t: `J'ai eu le plaisir de collaborer avec Cédric pendant 5 ans et c’est une <strong>personne sur qui l’on peut compter</strong> en toutes circonstances. <br><br>Au-delà de ses compétences de Product Manager, j'ai particulièrement apprécié la <strong>solidité de ses engagements</strong> et sa <strong>loyauté</strong> exemplaire.<br><br> Cédric est un collaborateur toujours <strong>jovial</strong>, qui apporte une <strong>énergie positive</strong> au sein d'une équipe. <br><br>Je le recommande vivement pour son <strong>professionnalisme </strong>et ses <strong>qualités humaines rares</strong>.`, 
	img: "https://media.licdn.com/dms/image/v2/D4E03AQHpM0Tmo9W20A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1700547120552?e=1770249600&v=beta&t=bOkdL8GlSc9TsFHkSQTguflZACma6f8c9LhnoR5x2Vk", 
	lien: "https://www.linkedin.com/in/ludovic-levy-94071a55",
	tags: ["Product", "SoftSkills", "Relationnel"]
    },
    { 	n: "Marlène BIARD", 
	r: "#Slasheuse : Communication engagée | Coaching professionnel | Bilans de compétences | Animation de conférences | Evénementiel | Formation soft skills", 
	t: `J’ai eu le plaisir de travailler avec Cédric à la Croix-Rouge, où il occupait le rôle de chef de projet en maîtrise d’ouvrage informatique. <br><br>J’ai particulièrement apprécié sa grande <strong>réactivité</strong> et sa capacité à apporter des <strong>réponses concrètes et pragmatiques</strong> aux problématiques rencontrées.<br><br> <strong>Toujours à l’écoute des besoins</strong> des utilisateurs et des parties prenantes, Cédric sait <strong>transformer des enjeux</strong> parfois complexes en <strong>solutions simples et efficaces</strong>, avec un objectif constant : <strong>améliorer et fluidifier l’expérience client</strong>. <br><br>Son <strong>sens du service, sa rigueur et son engagement </strong>ont été de réels atouts pour la réussite des projets menés ensemble.`, 
	img: "https://media.licdn.com/dms/image/v2/D4E03AQEA5toIIcQxvg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732107701825?e=1770854400&v=beta&t=ciIw_cRqMDi_K1hRox2TRdbx352Db1hmygRBlT7w2kU", 
	lien: "https://www.linkedin.com/in/marlene-biard-53860742",
	tags: ["Organisation", "UX Strategy", "SoftSkills"]
    }

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
   2. INJECTION & CAROUSEL RECOMMANDATIONS (AVEC FILTRES)
   ========================================================================== */

function renderRecs(filter = 'Tous') {
    const track = document.getElementById('recoTrack');
    if(!track) return;

    // 1. Filtrage des données selon le tag (Simple ou Tableau)
    const filtered = filter === 'Tous' 
        ? recs 
        : recs.filter(r => {
            if (!r.tags) return false;
            // Si le filtre est un tableau (ex: ['Product', 'Workflow']), on vérifie si un des tags match
            if (Array.isArray(filter)) {
                return r.tags.some(tag => filter.includes(tag));
            }
            // Sinon (mot simple), on vérifie classiquement
            return r.tags.includes(filter);
        });

    // 2. Injection du HTML
    track.innerHTML = filtered.map(r => `
        <div class="reco-card fade-in">
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
            <div class="card-tags" style="margin-top:auto; display:flex; gap:5px; flex-wrap:wrap;">
                ${r.tags ? r.tags.map(tag => `<span style="font-size:0.6rem; color:var(--blue); font-weight:bold; opacity:0.7;">#${tag}</span>`).join('') : ''}
            </div>
            <a href="${r.lien}" target="_blank" style="display:block;margin-top:10px;font-size:0.65rem;color:var(--blue);text-decoration:none;font-weight:600">Profil LinkedIn ↗</a>
        </div>
    `).join('');

    // 3. Mise à jour du compteur dynamique
    const countElement = document.getElementById('reco-count');
    if(countElement) countElement.innerText = filtered.length;
    
    if (window.lucide) lucide.createIcons();
}

/**
 * Fonction appelée par les boutons de filtre
 * Supporte filterInput = 'Tous', 'Product' ou ['Tag1', 'Tag2']
 */
function filterRecs(filterInput) {
    // On gère l'état 'active' des boutons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        // Le bouton devient actif s'il a été cliqué (comparaison simplifiée)
        btn.classList.remove('active');
    });
    
    // On ajoute 'active' au bouton qui a déclenché l'événement
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }

    renderRecs(filterInput);
}

// Lancement initial
renderRecs();

function scrollR(d) {
    const track = document.getElementById('recoTrack');
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
