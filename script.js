gsap.registerPlugin(ScrollTrigger);

// 1. Initialisation de Lenis (Scroll Fluide)
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. Curseur personnalisé
const cursor = document.querySelector("#custom-cursor");
window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
    });
});

// 3. Animation de Parallaxe (C'est ça qui crée l'effet Twinbru)
// On fait bouger le contenu (.inner) à l'intérieur de la section qui défile
gsap.utils.toArray(".panel").forEach((section) => {
    const inner = section.querySelector(".inner");
    
    gsap.fromTo(inner, 
        { y: 100, opacity: 0 }, 
        {
            y: -100,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom", // Début de l'animation quand la section apparaît
                end: "bottom top",    // Fin quand elle disparaît
                scrub: true           // L'animation suit la vitesse du scroll
            }
        }
    );
});

// 4. Navigation fluide
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        lenis.scrollTo(target);
    });
});
