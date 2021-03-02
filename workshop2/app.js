// var card1 = document.getElementById('card1');
// var card2=document.getElementById('card2');
// var card3=document.getElementById('card3');
// var card4=document.getElementById('card4');
// var card5=document.getElementById('card5');

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

   
    card.addEventListener('mouseenter',() =>{
        card.style.width='60%';
        card.firstElementChild.classList.add('show');
        card.lastElementChild.classList.add('show');
        
    
    });
    card.addEventListener('mouseleave',() =>{
        card.style.width='20%';
        card.firstElementChild.classList.remove('show');
        card.lastElementChild.classList.remove('show');
    });
    
});

