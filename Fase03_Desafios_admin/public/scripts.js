/* 
Objetos de Estudo:
Verificar DOM TREE;
Verificar Window JavaScript Tree;

Objeto global window referente ao nosso navegador e não ao backend;

Da seguinte forma será aplicada somente nas páginas principais e não no decorrer do percurso
o efeito de seleção;

for (item of menuItens) {
    if (currentPage == item.getAttribute("href")) {
        item.classList.add("active")
    }
} 

Para aplicarmos em todo percurso, iremos utilizar o INCLUDES que é uma função que retorna
true or false se for incluido qualquer valor que seja igual a string

*/

const currentPage = location.pathname
const menuItens = document.querySelectorAll("header .links a")


for (item of menuItens) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
} 

// script de confirmação do delete
const formDelete = document.querySelector("#form-delete")
formDelete.addEventListener("submit", function (event) {
    const confirmation = confirm("Realmente deseja deletar?")
    if (!confirmation) {
        event.preventDefault() // cancela o funcionamento do delete
    }
})