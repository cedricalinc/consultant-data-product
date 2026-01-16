

// 1. Initialisation du Smooth Scroll (Lenis)
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 2. Animation d'entrée (Hero)
const tl = gsap.timeline();
tl.to(".hero-title", { opacity: 1, y: -20, duration: 1, ease: "power4.out", delay: 0.5 })
  .to(".hero-sub", { opacity: 1, y: -10, duration: 1, ease: "power4.out" }, "-=0.5");

// 3. Animation au Scroll (Section 2)
gsap.from(".reveal-text", {
    scrollTrigger: {
        trigger: ".reveal-text",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
    },
    opacity: 0,
    x: -100,
    duration: 1
});

// Animation du cercle Data (Scale au scroll)
gsap.to(".data-circle", {
    scrollTrigger: {
        trigger: ".data-circle",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    scale: 2,
    rotate: 360,
    opacity: 1
});

// 4. Barre de progression
gsap.to("#progress", {
    width: "100%",
    ease: "none",
    scrollTrigger: { scrub: 0.3 }
});

// Animation pour chaque ligne de projet
gsap.utils.toArray(".project-row").forEach(row => {
    gsap.from(row, {
        scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "top 40%",
            scrub: true
        },
        opacity: 0,
        y: 100,
        filter: "blur(10px)"
    });
});




// 1. Gestion du clic fluide vers les sections
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Utilisation de Lenis pour un scroll ultra-fluide
        lenis.scrollTo(targetSection, {
            offset: 0,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Easing premium
        });
    });
});

// 2. Mise en avant du lien actif au scroll (Highlight)
gsap.utils.toArray("section").forEach((section) => {
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
        ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            onToggle: (self) => {
                if (self.isActive) {
                    link.classList.add("text-blue-500", "scale-110");
                } else {
                    link.classList.remove("text-blue-500", "scale-110");
                }
            },
        });
    }
});
