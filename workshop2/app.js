const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.style.transition = "width 1s";

  card.addEventListener("mouseenter", () => {
    card.firstElementChild.classList.add("show");
    card.lastElementChild.classList.add("show");
  });

  card.addEventListener("mouseleave", () => {
    card.firstElementChild.classList.remove("show");
    card.lastElementChild.classList.remove("show");
  });
});
