// Crie um programa que armazena um array de usuários (objetos), 
// cada usuário tem um nome e suas tecnologias (novo array);

const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Arthur",
        tecnologias: ["HTML", "Node.js"]
    }
]
// Percorra a lista de usuários com uma estrutura de repetição 
// imprimindo em tela as informações dos usuários;

    for (let i = 0; i < usuarios.length; i++){
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}.`)
    }
  

//Crie uma função que recebe os dados de um objeto de usuário e 
//retorna SE o usuário trabalha com CSS ou não. Essa função deve 
//retornar um boolean true/false.
function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') 
        return true
            
    }    
    return false 
}

//Percorra o array de usuários e, para cada um, verifique se o mesmo 
//trabalha com CSS utilizando a função construída acima, se SIM, imprima 
//em tela as informações do usuário.

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
    
    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS.`)
    }
}
    