gsap.registerPlugin(ScrollTrigger);

// 1. Smooth Scroll (Lenis)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

// 2. Curseur fluide (Fini la croix !)
const cursor = document.querySelector("#custom-cursor");
window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX - 6,
        y: e.clientY - 6,
        duration: 0.4,
        ease: "power3.out"
    });
});

// 3. Animation de PARALLAXE (L'effet anti-bloc)
// On fait bouger chaque .content-inner à une vitesse différente
gsap.utils.toArray("section").forEach((section) => {
    const content = section.querySelector(".content-inner");
    
    gsap.fromTo(content, 
        { y: 100, opacity: 0 }, 
        {
            y: -100, 
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom", // Quand le bas du scroll touche le haut de la section
                end: "bottom top",    // Quand le haut du scroll touche le bas de la section
                scrub: 1.5           // C'est ce qui crée le flottement fluide
            }
        }
    );
});

// 4. Barre de progression
gsap.to("#progress", {
    width: "100%",
    ease: "none",
    scrollTrigger: { scrub: 0.3 }
});

// 5. Navigation fluide au clic
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        lenis.scrollTo(target);
    });
});
