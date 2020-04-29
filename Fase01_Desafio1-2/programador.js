/* Crie um programa com um objeto para armazenar dados de um programador 
como nome, idade e tecnologias que trabalha. */

const programador = {
    usuario: 'Arthur',
    idade: 26,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${programador.usuario} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`)