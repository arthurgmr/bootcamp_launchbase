/* 
DOM = modelagem dos objetos dentro do HTML;

querySelector = selecionar um ojeto baseado no seletor CSS;

querySelectorAll = selecionar diversos objetos/elementos iguais;

addEventListener = ouvidor de eventos e executa a ação depois; 

classList.add = adicona o nome da classe;

classList.remove = remove o nome da classe;

getAttribute = pega qualquer atributo dentro da div;

*/


const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id")
        window.location.href = `/video?id=${videoId}`
        

    })
}



