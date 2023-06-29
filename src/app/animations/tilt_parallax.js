export const initializeTiltEffect = () => {
  const container = document.querySelector(".projects-container");
  const transitionDuration = 0.5; // Adjust the duration as needed
  const sensitivity = 20;

  const adjustTilt = (e) => {
    var rect = container.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const xAxisRotation =
      -sensitivity * ((y - containerHeight / 2) / containerHeight);
    const yAxisRotation =
      sensitivity * ((x - containerWidth / 2) / containerWidth);

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
