// 10 RECOMMANDATIONS DÉTAILLÉES
const recs = [
    { n: "Julie D.", r: "Head of Product @ Tech", t: "Cédric a transformé notre approche de la donnée. Un PM brillant.", img: "https://i.pravatar.cc/100?u=1" },
    { n: "Marc A.", r: "CTO @ Startup", t: "Profil hybride rare, expert SQL et Vision Produit.", img: "https://i.pravatar.cc/100?u=2" },
    { n: "Sophie L.", r: "Directrice ESS", t: "Rigueur et engagement exceptionnels sur nos projets SI.", img: "https://i.pravatar.cc/100?u=3" },
    { n: "Thomas B.", r: "Lead Data Engineer", t: "Ses architectures dbt sont propres, scalables et bien documentées.", img: "https://i.pravatar.cc/100?u=4" },
    { n: "Inès R.", r: "CEO @ GreenTech", t: "Efficacité redoutable sur l'automatisation No-code.", img: "https://i.pravatar.cc/100?u=5" },
    { n: "Kevin L.", r: "Senior PO", t: "Sait parfaitement traduire le business en specs techniques.", img: "https://i.pravatar.cc/100?u=6" },
    { n: "Amélie K.", r: "Consultante RH", t: "La gamification de nos outils a boosté l'onboarding.", img: "https://i.pravatar.cc/100?u=7" },
    { n: "Paul W.", r: "Product Manager", t: "Un expert de l'Agilité Scrum et de la roadmap valeur.", img: "https://i.pravatar.cc/100?u=8" },
    { n: "Claire G.", r: "Operations Manager", t: "Gain de temps de 30% grâce à ses automatisations Make.", img: "https://i.pravatar.cc/100?u=9" },
    { n: "Jean-Luc M.", r: "DF", t: "Maîtrise parfaite des flux SI complexes et critiques.", img: "https://i.pravatar.cc/100?u=10" }
];

const track = document.getElementById('recoTrack');
if(track) {
    recs.forEach(r => {
        track.innerHTML += `
            <div class="reco-card">
                <div style="display:flex;align-items:center;gap:15px;margin-bottom:15px">
                    <img src="${r.img}" style="width:45px;border-radius:50%">
                    <div><h4 style="color:#fff;font-size:0.9rem">${r.n}</h4><p style="font-size:0.65rem;color:#3b82f6">${r.r}</p></div>
                </div>
                <p style="font-size:0.85rem;font-style:italic;color:#ccc">"${r.t}"</p>
                <a href="#" style="display:block;margin-top:10px;font-size:0.6rem;color:#555;text-decoration:none">Profil LinkedIn ↗</a>
            </div>
        `;
    });
}

function scrollR(d) {
    const cardWidth = track.querySelector('.reco-card').offsetWidth + 20;
    track.scrollBy({ left: d * cardWidth, behavior: 'smooth' });
}

// DESCRIPTIONS STRUCTURÉES
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
        impacts: ["Fonctionnalités sur-mesures pour les clients", "Sentiment d'accueil positif supérieur de 50%"]
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
		"2006 : BNP - CDD </br>Episodique Procurement",
		"2007 : Edu-Performance Canada </br>Stage Comptabilité",
		"2007 : ESSEC - CDD </br>Formation Intra",
		"2007 : Assurances BRED - CDD </br>Gestionnaire",
		"2008 : Armée de l'Air - Stage </br>Ressources Humaines",
		"2009-2010 : Plateforme du Bâtiment (Saint-Gobain) - Alternance </br>Contrôleur de Gestion",
		"2011 - 2013 : Croix-Rouge - CDD </br>Secouriste professionnel",
		"2013 : Cedeo (Saint-Gobain) - CDI </br>Gestionnaire Stock et Offre"],
        impacts: ["Parcours formateur multi-directions en back et front office"]
    }
};

function openM(id) {
    const data = exps[id];
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
    document.getElementById('modal').style.display = 'flex';
    lucide.createIcons();
}

function closeM() { document.getElementById('modal').style.display = 'none'; }
lucide.createIcons();



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

function openLegal() {
    document.getElementById('modal-legal').style.display = 'flex';
}

function closeLegal() {
    document.getElementById('modal-legal').style.display = 'none';
}


const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Vérifier si l'utilisateur a déjà une préférence enregistrée
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeIcon.setAttribute('data-lucide', 'moon');
    }
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.setAttribute('data-lucide', 'moon');
    }
    
    // Indispensable pour mettre à jour l'icône Lucide
    lucide.createIcons();
});
