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
