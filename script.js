gsap.registerPlugin(ScrollTrigger);

// 1. Smooth Scroll
const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. Cursor
const cursor = document.querySelector("#custom-cursor");
window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
    });
});

// 3. Parallax Reveal (Effet de glissement entre blocs)
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

// 4. Smooth Anchor
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'));
    });
});
