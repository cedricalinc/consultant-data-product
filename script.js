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
    { 	
        n: "Emma HEDEF", 
        r: "Directrice Digital et Marketing - Programme Malin", 
        t: `Je tiens à partager un retour très positif sur l’accompagnement de Cédric en tant que Product Manager auprès de notre association Programme Malin. <br><br>Il nous a aidés à concevoir un espace de travail centralisé sur Notion, inspiré de la méthode Bullet Journal, pour mieux <strong>aligner la vision</strong>, <strong>clarifier </strong>les rôles, <strong>prioriser </strong>efficacement et <strong>fluidifier</strong> la collaboration entre plusieurs intervenants. <br><br>Au-delà des outils, j’ai particulièrement apprécié sa <strong>pédagogie</strong>, sa <strong>patience</strong> et la <strong>pertinence de ses recommandations</strong>.<br><br> Il a su <strong>structurer des besoins complexes sans les alourdir</strong>, et <strong>accompagner les équipes</strong> vers plus de clarté et d’autonomie dès les premières semaines. <br><br>Un <strong>accompagnement à la fois structurant, pragmatique et humain</strong>, que je recommande sans hésiter.`, 
        img: "https://media.licdn.com/dms/image/v2/D4E03AQEKgOUv8RsPew/profile-displayphoto-scale_400_400/B4EZv6AUrIGcAg-/0/1769425949036?e=1770854400&v=beta&t=G3xFOP_6MQ3Kv35Td2IykMHZVyVqlezuFlnIn3qQl5w", 
        lien: "https://www.linkedin.com/in/emma-hedef",
        tags: ["Workflow", "Product", "User-Centric", "Pédagogie", "SoftSkills"] 
    },
    { 
        n: "Bertrand OGIER", 
        r: "Directeur pédagogique | Formations à impact | ESS - Innovation - Inclusion", 
        t: `Cédric est un <strong>professionnel compétent et engagé</strong>. Doué d'une <strong>capacité d'analyse et de structuration des projets</strong>, il est aussi source d'<strong>avis pertinents</strong>, que cela soit d'un point de vue <strong>technique ou stratégique</strong>. Enfin Cédric est un collègue très sympathique et qui fait preuve d'un <strong>esprit d'équipe affirmé</strong>.`, 
        img: "https://media.licdn.com/dms/image/v2/D4E35AQHO3d3JZ5SUgw/profile-framedphoto-shrink_100_100/B4EZrfwx4MKMAo-/0/1764690698247?e=1770674400&v=beta&t=odeH_ileGyjHtB1fL9HxH7288HS2qdlBmy63WX9-xj8", 
        lien: "https://www.linkedin.com/in/bertrand-ogier-a2874716",
        tags: ["Analyse", "Organisation", "SoftSkills","Relationnel"]
    },
    { 
        n: "Saïname ALIBAY", 
        r: "Responsable du service Animation, Communication et Placement entreprises - CFA Numia / EFREI", 
        t: `J’ai eu le plaisir de travailler avec Cédric Alinc, un excellent collègue, aussi apprécié pour ses qualités humaines que pour son professionnalisme.<strong>Fiable, impliqué et toujours à l’écoute</strong>, Cédric sait créer un <strong>climat de travail collaboratif</strong> et contribue pleinement à créer un <strong>environnement de travail positif et stimulant</strong>. Cédric est une personne sur qui l’on peut compter et avec qui il est réellement agréable de travailler.Je le recommande sans hésitation.`, 
        img: "https://media.licdn.com/dms/image/v2/D4E03AQGVVGfrdlnBZw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1666281302502?e=1771459200&v=beta&t=ZFNUMJTHwn2-q6ZQCv-1mmhqjuTCRCMkVp5frXbZfuQ", 
        lien: "https://www.linkedin.com/in/sa%C3%AFname-alibay",
        tags: ["SoftSkills", "Relationnel", "Product"]
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
    { 	
        n: "Ludovic LEVY", 
        r: "Pilote Google Workspace Accompagnement et Gouvernance - CRf", 
        t: `J'ai eu le plaisir de collaborer avec Cédric pendant 5 ans et c’est une <strong>personne sur qui l’on peut compter</strong> en toutes circonstances. <br><br>Au-delà de ses compétences de Product Manager, j'ai particulièrement apprécié la <strong>solidité de ses engagements</strong> et sa <strong>loyauté</strong> exemplaire.<br><br> Cédric est un collaborateur toujours <strong>jovial</strong>, qui apporte une <strong>énergie positive</strong> au sein d'une équipe. <br><br>Je le recommande vivement pour son <strong>professionnalisme </strong>et ses <strong>qualités humaines rares</strong>.`, 
        img: "https://media.licdn.com/dms/image/v2/D4E03AQHpM0Tmo9W20A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1700547120552?e=1770249600&v=beta&t=bOkdL8GlSc9TsFHkSQTguflZACma6f8c9LhnoR5x2Vk", 
        lien: "https://www.linkedin.com/in/ludovic-levy-94071a55",
        tags: ["Product", "SoftSkills", "Relationnel"]
    },
    { 	
        n: "Marlène BIARD", 
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
        h: "iPorta - Visiativ",
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
            "2006 : BNP - CDD Procurement",
            "2007 : Edu-Performance Canada - Stage Comptabilité",
            "2007 : ESSEC - CDD Formation Intra",
            "2007 : Assurances BRED - CDD Gestionnaire",
            "2008 : Armée de l'Air - Stage RH",
            "2009-2010 : Plateforme du Bâtiment - Alternance Contrôleur de Gestion",
            "2011-2013 : Croix-Rouge - CDD Secouriste professionnel",
            "2013 : Cedeo - CDI Gestionnaire Stock"
        ],
        impacts: ["Parcours formateur multi-directions en back et front office"]
    }
};

/* ==========================================================================
   2. INJECTION & CAROUSEL (AVEC FILTRES)
   ========================================================================== */
function renderRecs(filter = 'Tous') {
    const track = document.getElementById('recoTrack');
    if(!track) return;

    const filtered = filter === 'Tous' 
        ? recs 
        : recs.filter(r => r.tags && (Array.isArray(filter) ? r.tags.some(t => filter.includes(t)) : r.tags.includes(filter)));

    track.innerHTML = filtered.map(r => `
        <div class="reco-card fade-in">
            <div style="display:flex;align-items:center;gap:15px;margin-bottom:15px">
                <div class="pulse-container">
                    <img src="${r.img}" class="pulse-img">
                </div>
                <div>
                    <h4 style="color:var(--white);font-size:0.9rem;margin:0">${r.n}</h4>
                    <p style="font-size:0.65rem;color:var(--blue);font-weight:700;margin:0;text-transform:uppercase">${r.r}</p>
                </div>
            </div>
            <p class="reco-text">"${r.t}"</p>
            <div class="card-tags">
                ${r.tags ? r.tags.map(tag => `<span class="mini-tag">#${tag}</span>`).join('') : ''}
            </div>
            <a href="${r.lien}" target="_blank" style="display:block;margin-top:10px;font-size:0.65rem;color:var(--blue);text-decoration:none;font-weight:600">Profil LinkedIn ↗</a>
        </div>
    `).join('');

    const countElement = document.getElementById('reco-count');
    if(countElement) countElement.innerText = filtered.length;
    if (window.lucide) lucide.createIcons();
}

function filterRecs(filterInput) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
    renderRecs(filterInput);
}

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
   3. GESTION DES MODALES
   ========================================================================== */
function openM(id) {
    const data = exps[id];
    if(!data) return;

    const missionsHTML = data.missions.map(m => `<li>${m}</li>`).join('');
    const impactsHTML = data.impacts ? `
        <div class="impact-box">
            <strong>Impacts</strong>
            <ul class="modal-list">${data.impacts.map(i => `<li><strong>${i}</strong></li>`).join('')}</ul>
        </div>` : '';

    document.getElementById('m-body').innerHTML = `
        <h2>${data.h}</h2>
        <p style="color:var(--blue); font-weight:700; margin-bottom:20px;">${data.t}</p>
        <ul class="modal-list">${missionsHTML}</ul>
        ${impactsHTML}
        <button onclick="closeM()" class="modal-close-btn">Fermer</button>
    `;
    
    document.getElementById('modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeM() { 
    document.getElementById('modal').style.display = 'none'; 
    document.body.style.overflow = 'auto';
}

function openLegal() { document.getElementById('modal-legal').style.display = 'flex'; }
function closeLegal() { document.getElementById('modal-legal').style.display = 'none'; }

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
    event.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
        const emailButtons = document.querySelectorAll('#emailBtn, .contact-actions-box .btn-main');
        emailButtons.forEach(btn => {
            const span = btn.querySelector('span');
            const icon = btn.querySelector('i');
            const originalText = span ? span.innerText : "Discutons de votre projet";
            
            btn.style.background = "#059669";
            if (span) span.innerText = "Mail copié !";
            if (icon) { icon.setAttribute('data-lucide', 'check'); lucide.createIcons(); }

            setTimeout(() => {
                btn.style.background = "";
                if (span) span.innerText = originalText;
                if (icon) { icon.setAttribute('data-lucide', 'mail'); lucide.createIcons(); }
            }, 2500);
        });
        setTimeout(() => { window.location.href = "mailto:" + email; }, 300);
    });
}

const themeToggle = document.getElementById('theme-toggle');
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.innerHTML = `<i data-lucide="${theme === 'light' ? 'moon' : 'sun'}"></i>`;
    lucide.createIcons();
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'light' ? 'dark' : 'light');
});

/* ==========================================================================
   SCROLLSPY FINAL & HARMONISÉ
   ========================================================================== */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id], footer[id]');

const sectionToNav = {
    'sectors': 'sectors',
    'methodo': 'methodo',
    'skills': 'methodo',
    'references': 'references',
    'experience': 'experience',
    'contact': 'contact'
};

const observerOptions = {
    // On centre la détection sur une bande de 40% au milieu de l'écran
    rootMargin: '-30% 0px -30% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    // On ne traite l'observer que si on n'est pas tout en haut et pas tout en bas
    const scrollY = window.scrollY;
    const isAtBottom = (window.innerHeight + scrollY) >= document.body.offsetHeight - 100;

    if (scrollY > 200 && !isAtBottom) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const targetNav = sectionToNav[id];
                
                navLinks.forEach(link => {
                    link.classList.remove('highlight');
                    if (link.getAttribute('href') === `#${targetNav}`) {
                        link.classList.add('highlight');
                    }
                });
            }
        });
    }
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Gestion exclusive du Haut (Hero) et du Bas (Contact)
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const isAtBottom = (window.innerHeight + scrollY) >= document.body.offsetHeight - 100;

    if (scrollY < 200) {
        navLinks.forEach(l => l.classList.remove('highlight'));
    } else if (isAtBottom) {
        navLinks.forEach(l => l.classList.remove('highlight'));
        const contactLink = document.querySelector('a[href="#contact"]');
        if (contactLink) contactLink.classList.add('highlight');
    }
});

// Initialisation
renderRecs();
applyTheme(localStorage.getItem('theme') || 'dark');
lucide.createIcons();
