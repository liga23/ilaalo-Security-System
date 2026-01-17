// Small enhancement for button feedback
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    button.style.opacity = "0.9";
    setTimeout(() => {
      button.style.opacity = "1";
    }, 150);
  });
});
