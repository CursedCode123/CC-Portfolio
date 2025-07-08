window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-image", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.from(".hero-text h1", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".hero-text p", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out"
  });

  gsap.from(".contact-btn", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: 0.9,
    ease: "back.out(1.7)"
  });

  document.querySelectorAll(".skill-fill").forEach(fill => {
    const percent = fill.dataset.percent;
    gsap.to(fill, {
      scrollTrigger: {
        trigger: fill,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      width: percent + "%",
      duration: 2,
      ease: "power2.out"
    });
  });
});
