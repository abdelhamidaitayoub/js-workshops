const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.style.transition = "width 1s";

  card.addEventListener("mouseenter", () => {
    card.firstElementChild.classList.add("show");
    card.lastElementChild.classList.add("show");
  });

<<<<<<< Updated upstream
  card.addEventListener("mouseleave", () => {
    card.firstElementChild.classList.remove("show");
    card.lastElementChild.classList.remove("show");
  });
});
=======
   
    card.addEventListener('mouseenter',() =>{
        card.style.width='80vw';
        
    
    
    
    });
    card.addEventListener('mouseleave',() =>{
        card.style.width='20%';
       
        
       
        
    });
    
});
>>>>>>> Stashed changes
