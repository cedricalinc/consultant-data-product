gsap.registerPlugin(ScrollTrigger);

// 1. Initialisation de Lenis (Scroll Fluide)
const lenis = new Lenis({
    lerp: 0.1, // Vitesse de lissage (0.1 = très fluide)
    smoothWheel: true
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
        duration: 0.4,
        ease: "power3.out"
    });
});

// 3. Animation de PARALLAXE (L'effet de flottement)
gsap.utils.toArray(".panel").forEach((panel) => {
    const inner = panel.querySelector(".inner");
    
    gsap.fromTo(inner, 
        { y: 80, opacity: 0 }, 
        {
            y: -80,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        }
    );
});

// 4. Scroll vers les ancres via Lenis
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        lenis.scrollTo(targetId, {
            offset: -50,
            duration: 1.5
        });
    });
});
