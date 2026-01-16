gsap.registerPlugin(ScrollTrigger);

// 1. Smooth Scroll (Lenis)
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 2. Curseur qui suit la souris avec inertie
const cursor = document.querySelector("#custom-cursor");
window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
    });
});

// 3. Effet de Parallaxe : Le contenu bouge à une vitesse différente
gsap.utils.toArray("section").forEach((section) => {
    const content = section.querySelector(".content-to-animate");
    
    gsap.fromTo(content, 
        { y: 100, opacity: 0 }, 
        {
            y: -100,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );
});

// 4. Barre de progression en haut
gsap.to("#progress", {
    width: "100%",
    ease: "none",
    scrollTrigger: { scrub: 0.3 }
});

// 5. Animation d'entrée du Hero
const tl = gsap.timeline();
tl.from(".hero-title", { y: 50, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.5 })
  .from(".hero-sub", { y: 30, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8");

// 6. Navigation fluide
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        lenis.scrollTo(target);
    });
});
