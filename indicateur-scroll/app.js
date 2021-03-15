// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
    // position actuelle
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //  hauteur du contenu - hauteur de la fenêtre
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // petit calcul permettant d'obtenir le pourcentage de la situation actuel
  let scrolled = (winScroll / height) * 100;
  // et puis on assigne cette valeur a la largeur du la progress bar 
  document.getElementById("myBar").style.width = scrolled + "%";
}