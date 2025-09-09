const { animate, utils, text, stagger, createSpring } = anime;
gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", () => {
  utils.set(".intro-text", {
    opacity: 1,
  });

  const { chars } = text.split(".intro-text", {
    chars: { wrap: "clip" },
  });
  animate(chars, {
    y: [
      {
        to: ["120%", "0%"],
        ease: createSpring({ stiffness: 100, damping: 10 }),
        delay: stagger(70, { from: "center" }),
      },
      {
        to: "-120%",
        delay: stagger(70, { from: "first" }),
        ease: "linear",
        delay: 500,
        duration: 500,
      },
    ],
  });
  let tl = gsap.timeline();

  tl.to(".hero", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.7,
    ease: "power3.inOut",
  });
});
