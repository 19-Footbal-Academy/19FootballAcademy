function setAboutPageAnimation() {
  const aboutSection = document.querySelector(".about");
  const sectionHeight = aboutSection.clientHeight;
  const sectionWidth = aboutSection.clientWidth;
  const animationLowestHeightBoundary = -1;
  const animationUpperHeightBoundary = 4;
  const animationLowestXBoundary = -7;
  const animationUpperXBoundary = 7;
  const animationRange =
    animationUpperHeightBoundary - animationLowestHeightBoundary;
  const animationXRange =
    animationUpperHeightBoundary - animationLowestXBoundary;
  const animationHeightUnitValue = animationRange / sectionHeight;
  const animationXUnitValue = animationXRange / sectionWidth;
  const playerImage = document.querySelector(".about-image-player");
  aboutSection.addEventListener("pointermove", (event) => {
    // playerImage.animate(``)
    playerImage.style.transform = `translateX(${
      50 +
      (animationXUnitValue * (sectionWidth - event.clientX) +
        animationLowestXBoundary)
    }px) translateY(${
      animationHeightUnitValue * (sectionHeight - event.offsetY) +
      animationLowestHeightBoundary
    }px)`;
    // console.log(event.clientX);
  });
}

setAboutPageAnimation();
