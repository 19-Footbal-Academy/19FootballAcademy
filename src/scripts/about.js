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
  const originalTranslateXValue = 50;
  const playerImage = document.querySelector(".about-image-player");
  aboutSection.addEventListener("pointermove", (event) => {
    const yAxisValue =
      animationHeightUnitValue * (sectionHeight - event.offsetY) +
      animationLowestHeightBoundary;
    const xAxisValue =
      originalTranslateXValue +
      (animationXUnitValue * (sectionWidth - event.clientX) +
        animationLowestXBoundary);
    const playerImageAnimationKeyframe = [
      { transform: `translateX(${xAxisValue}px) translateY(${yAxisValue}px)` },
    ];
    const animationOptions = { duration: 300, easing: "ease", fill: 'forwards' };
    playerImage.animate(playerImageAnimationKeyframe, animationOptions);
  });
}

setAboutPageAnimation();
