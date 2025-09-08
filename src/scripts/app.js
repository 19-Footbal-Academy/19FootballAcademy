document.addEventListener("DOMContentLoaded", () => {
  let tl = gsap.timeline();
  tl.to(".hero", {
    backgroundSize: "100%",
    duration: 0.5,
    ease: "power4.Out",
  }).to(".hero", { backgroundPosition: "left top", duration: 0.3 });
});
