export const initializeTiltEffect = () => {
  const container = document.querySelector(".projects-container");
  const transitionDuration = 0.5; // Adjust the duration as needed

  const adjustTilt = (e) => {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const xAxisRotation =
      -50 * ((e.clientY - containerHeight) / 2 / containerHeight);
    const yAxisRotation =
      50 * ((e.clientX - containerWidth) / 2 / containerWidth);

    container.style.transform = `perspective(1000px) rotateX(${xAxisRotation}deg) rotateY(${yAxisRotation}deg)`;
  };

  const resetTilt = () => {
    container.style.transition = `transform ${transitionDuration}s ease`;
    container.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    // Reset the transition property after the transition completes
    setTimeout(() => {
      container.style.transition = "ease";
    }, transitionDuration * 1000);
  };

  container.addEventListener("mouseenter", () => {
    resetTilt();
    container.addEventListener("mousemove", adjustTilt);
  });

  container.addEventListener("mouseleave", () => {
    container.removeEventListener("mousemove", adjustTilt);
    resetTilt();
  });
};