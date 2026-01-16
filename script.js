gsap.registerPlugin(ScrollTrigger);

// 1. Initialisation de Lenis (Scroll Fluide)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

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

// 3. Animation de PARALLAXE (L'effet de flottement)
// On anime l'élément .inner à l'intérieur de chaque .panel
gsap.utils.toArray(".panel").forEach((panel) => {
    const inner = panel.querySelector(".inner");
    
    gsap.fromTo(inner, 
        { y: 100, opacity: 0 }, 
        {
            y: -100, 
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: panel,
                start: "top bottom", // Commence quand le haut du panel touche le bas de l'écran
                end: "bottom top",    // Finit quand le bas du panel touche le haut de l'écran
                scrub: 1             // Lie l'animation au défilement exact
            }
        }
    );
});

// 4. Scroll vers les ancres
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        lenis.scrollTo(target);
    });
});
