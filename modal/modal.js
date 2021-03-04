const btn = document.getElementById('modal-button');
const modal = document.getElementById('modal-id');
const span = document.getElementsByClassName('close')[0];

// On change la valeur de la propriété display

btn.addEventListener('click', () => {
    modal.style.display = 'block';
})

span.addEventListener('click', () => {
    modal.style.display = 'none';
})

// si on click à coté du modal
window.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.style.display = 'none'
    }
});