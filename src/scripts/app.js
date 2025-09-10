document.addEventListener("DOMContentLoaded", () => {
  const { animate, utils, text, stagger, createSpring } = anime;
  gsap.registerPlugin(SplitText);
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
        delay: stagger(50, { from: "center" }),
      },
      {
        to: "-120%",
        delay: stagger(50, { from: "center" }),
        ease: "linear",
        duration: 500,
      },
    ],
  });

  utils.set(".hero-text h1", {
    opacity: 1,
  });
  const { chars: heroTextChars } = text.split(".hero-text > h1", {
    chars: { wrap: "clip" },
  });

  animate(heroTextChars, {
    scale: [
      {
        to: [0, 1],
        ease: "outElastic(1.2,.3)",
        delay: stagger(50, { start: 3000, from: "start" }),
      },
    ],
  });

  let tl = gsap.timeline();

  tl.to(".hero", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.7,
    ease: "power3.inOut",
  })
    .to(
      "header > img",
      {
        opacity: 1,
        duration: 0.3,
        ease: "bounce.inOut",
      },
      ">2"
    )
    .from(
      "header > img",
      {
        x: 50,
        duration: 0.3,
        ease: "bounce.out",
      },
      "<"
    )
    .to(
      "header .join-us-btn",
      {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      },
      "<0.4"
    )
    .from(
      "header .join-us-btn",
      { x: -50, duration: 0.4, ease: "bounce.out" },
      "<"
    );
});
