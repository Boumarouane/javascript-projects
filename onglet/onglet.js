const onglets = document.querySelectorAll('.onglets');
const contenu = document.querySelectorAll('.contenu')
let index = 0;

onglets.forEach(onglet => {

    onglet.addEventListener('click', () => {
        // ajout de la class active
        if(onglet.classList.contains('active')){
            return;
        } else {
            onglet.classList.add('active');
        }
        // index permettant de vérifier là ou on a cliqué
        index = onglet.getAttribute('data-anim');
        console.log(index);
        // on retire la class active sur les onglets non séléctionné
        for(i = 0; i < onglets.length; i++) {

            if(onglets[i].getAttribute('data-anim') != index) {
                onglets[i].classList.remove('active');
            }

        }
        // on ajoute la class active en fonction de la valeur de l'index séléctionné
        for(j = 0; j < contenu.length; j++){

            if(contenu[j].getAttribute('data-anim') == index) {
                contenu[j].classList.add('activeContenu');
            } else {
                contenu[j].classList.remove('activeContenu');
            }
            

        }


    })

})