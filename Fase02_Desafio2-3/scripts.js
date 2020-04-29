
const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards)
    card.addEventListener("click", function (){
        const pageId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modal.classList.add('maximize')
        modalOverlay.querySelector("iframe").src = `http://www.rocketseat.com.br/${pageId}`;
    })


closeModal = document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = "";
})