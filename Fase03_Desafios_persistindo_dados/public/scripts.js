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

// script de paginação;
// layout de paginação: [1, ..., 13, 14, *15*, 16, 17, ... 20];
// totalPage = 20;
// selectedPage = 15;

function paginate(selectedPage, totalPages) {

    let pages = [],
        oldPage

    for(let currentPage = 1; currentPage <= totalPages; currentPage++) {
        
        const firstAndLastPage = currentPage === 1 || currentPage == totalPages
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2

        if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
            if(oldPage && currentPage - oldPage > 2) {
                pages.push("...")
            }

            if(oldPage && currentPage - oldPage == 2) {
                pages.push(oldPage + 1)
            }
            pages.push(currentPage)

            oldPage = currentPage
            
        }
    }
    return pages
}

function createPagination(pagination) {
    const filter = pagination.dataset.filter
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const pages = paginate(page, total)

    let elements = ""

    for (let page of pages) {
        if(String(page).includes("...")) {
            elements += `<span>${page}</span>`

        } else {
            if(filter) {
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
        } else {
            elements += `<a href="?page=${page}">${page}</a>`
        }
    }
}

    pagination.innerHTML = elements
}

const pagination = document.querySelector(".pagination")

if (pagination) {
    createPagination(pagination)
}
