
// Un slide marche grace à une class que l'on retire et que l'on rajoute en fonction d'une variable(count) que l'on incrémente ou décrémente par une condition.
const items = document.querySelectorAll("img");
const numberItems = items.length;
const next = document.querySelector(".btn-right");
const previous = document.querySelector(".btn-left");
let count = 0;

// fonction slide suivant 
const nextSlide = () => {
    items[count].classList.remove("active");

    if (count < numberItems - 1){
        count++
    }
    else {
        count = 0;
    }

    items[count].classList.add("active");
} 

next.addEventListener('click', nextSlide)


// fonction slide précédent
const previousSlide = () => {
    items[count].classList.remove("active");
    
    if (count > 0){
        count--
    }
    else {
        count = numberItems - 1;
    }
    
    items[count].classList.add("active");
}

previous.addEventListener('click', previousSlide)


// slider avec les touches
const keyPress = (e) => {
    if (e.keyCode === 39){
        previousSlide();
    } 
    else if(e.keyCode === 37){
        nextSlide();
    }
}

document.addEventListener('keydown', keyPress)