module.exports = {
/*  Função para calcular a idade da pessoa(data atual - data de nascimento); */
    age: function age(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }
        return age
    },

/*  Função para converter a data de mile segundo para o formato html(yyy-mm-dd); */
    date: function(timestamp) {
        
        const date = new Date(timestamp)
        // Lembre de usar o UTC;
        const year = date.getUTCFullYear()
        // Mês é contado de 0 a 11 por isso soma + 1;
        // Como transformamos em string aplicamos o método .slice(cortar) para pergamos somente
        // as casas decimais que precimos para o cáculo da data;
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`, // retorno tipo iso
            birthDay: `${day}/${month}`
        }
    }   
}