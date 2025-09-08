document.addEventListener("DOMContentLoaded", () => {
  let tl = gsap.timeline();
  tl.to(".hero", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.7,
    ease: "power3.inOut",
  });
});
