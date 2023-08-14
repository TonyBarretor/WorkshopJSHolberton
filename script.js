const cards = document.querySelectorAll(".card");

console.log(cards);

cards.forEach(card=>{
  const boton = card.querySelector(".card-btn");
  boton.addEventListener("click", function(){
    card.classList.toggle("show-text");
  })
});