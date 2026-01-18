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
    { n: "Jean-Luc M.", r: "Directeur Financier", t: "Maîtrise parfaite des flux SI complexes et critiques.", img: "https://i.pravatar.cc/100?u=10" }
];

const track = document.getElementById('recoTrack');
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

function scrollR(d) {
    const cardWidth = track.querySelector('.reco-card').offsetWidth + 20;
    track.scrollBy({ left: d * cardWidth, behavior: 'smooth' });
}

// DESCRIPTIONS EXHAUSTIVES DES EXPÉRIENCES
const exps = {
    'malin': { h: "Programme Malin", t: "Accompagnement Stratégique (Bénévolat)", d: "Optimisation de l'organisation interne et du pilotage des Business Units via la méthode BUJO et des outils No-code. Structuration du reporting impact." },
    'numia': { h: "CFA numiA", t: "Senior Product Manager", d: "Transformation numérique du CFA. Automatisation des flux de conformité Qualiopi via IA (OpenAI API) et No-code (n8n). Gain de productivité de 30% sur les tâches administratives. Garant RGPD." },
    'clemence': { h: "Clémence Consulting", t: "Product Owner SI Finances", d: "Digitalisation des flux financiers pour des acteurs majeurs de l'Énergie et de l'Immobilier. Rédaction de spécifications fonctionnelles, logigrammes SI et coordination des développements." },
    'visiativ': { h: "Visiativ", t: "Ingénieur Développeur Fullstack", d: "Conception et développement d'une plateforme de gamification pour les processus RH. Stack : Java, JavaScript, React. Focus sur l'expérience utilisateur et l'engagement." },
    'crf': { h: "Croix-Rouge française", t: "Product Manager SI", d: "Pilotage du système d'information pour 75 000 utilisateurs. Gestion de la dématérialisation des factures fournisseurs (flux critiques). Transition vers l'Agilité Scrum et gestion de crise SI." }
};

function openM(id) {
    const data = exps[id];
    document.getElementById('m-body').innerHTML = `
        <h2 style="color:#3b82f6;margin-bottom:10px">${data.h}</h2>
        <h3 style="color:#fff;font-size:1rem;margin-bottom:20px">${data.t}</h3>
        <p style="color:#aaa;line-height:1.7">${data.d}</p>
        <button onclick="closeM()" style="margin-top:30px;background:none;border:1px solid #444;color:#fff;padding:10px 20px;border-radius:10px;cursor:pointer">Fermer</button>
    `;
    document.getElementById('modal').style.display = 'flex';
}
function closeM() { document.getElementById('modal').style.display = 'none'; }

lucide.createIcons();
