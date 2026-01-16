gsap.registerPlugin(ScrollTrigger);

// 1. Initialisation de Lenis (Scroll Fluide)
const lenis = new Lenis({
    duration: 1.5,
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
gsap.utils.toArray(".inner").forEach((inner) => {
    gsap.fromTo(inner, 
        { y: 100, opacity: 0 }, 
        {
            y: -100,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: inner,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );
});

// 4. Animation spécifique de la photo de profil
gsap.from(".profile-pic", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.8 // Apparaît après le titre
});

// 5. Scroll vers les ancres via Lenis
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'));
    });
});
