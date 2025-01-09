// JavaScript for Scroll-Triggered Animations
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
  
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  });