gsap.registerPlugin(ScrollTrigger);

// 1. Scroll Fluide
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
        duration: 0.4,
        ease: "power3.out"
    });
});

// 3. Animation de Parallaxe (Effet flottant entre sections)
gsap.utils.toArray(".panel").forEach((section) => {
    const inner = section.querySelector(".inner");
    
    gsap.fromTo(inner, 
        { y: 150, opacity: 0 }, 
        {
            y: -150,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
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
