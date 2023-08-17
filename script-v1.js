'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal'); // como en este caso tengo 3 botones con la misma clase y para poder seleccionarlos a todos se usa "querySelectorAll"


const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModel = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


for(let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].addEventListener('click', openModel);

    //
    btnClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);


    //Como cerrar el modal con la tecla "escape":
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape' && !modal.classList.contains('hidden')) { // si el modal NO contiene la clase 'hidden', entonces cierra el modal 
            closeModal();
        };
    });

}; 

