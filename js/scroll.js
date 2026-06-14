gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO PARALLAX MOTION
========================= */

gsap.to(".sky", {
  y: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".ruins", {
  y: 120,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".fog", {
  y: 80,
  opacity: 0.4,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


/* =========================
   SECTION FADE IN SYSTEM
========================= */

gsap.utils.toArray("section").forEach((section) => {
  gsap.fromTo(section,
    {
      opacity: 0,
      y: 60
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      }
    }
  );
});