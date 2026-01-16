gsap.registerPlugin(ScrollTrigger);

// 1. Initialisation de Lenis pour le Smooth Scroll
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

// 2. Curseur personnalisé (Finit la croix !)
const cursor = document.querySelector("#custom-cursor");
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.2,
        ease: "power2.out"
    });
});

// 3. Animation de Stacking (Effet Twinbru)
// On fait en sorte que chaque contenu de section "monte" plus vite que le scroll
gsap.utils.toArray(".panel").forEach((panel, i) => {
    const content = panel.querySelector(".content-inner");
    
    gsap.fromTo(content, 
        { y: 150, opacity: 0 }, 
        {
            y: -150, 
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: panel,
                start: "top bottom", 
                end: "bottom top",
                scrub: 1 // L'animation est liée à la progression du scroll
            }
        }
    );
});

// 4. Effet de parallaxe sur le fond
gsap.to(".bg-overlay", {
    scale: 1.2,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});
