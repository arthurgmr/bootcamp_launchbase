// module do node vai trabalhar com arquivos do sistema.
const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')
const Intl = require('intl')

exports.index = function (req, res) {
    return res.render("students/index", {students: data.students})
}

// create
exports.create = function (req, res) {
    return res.render("students/create")
    }

// post
exports.post = function (req, res) {
/*  Ideia de validação dos dados através do constructor;
    Constructor: é uma função que cria um obejto; */
    
/*  O contructor "Object.keys" retorna um array contendo com 
    as chaves do objetos sem os valores; */
    
        const keys = Object.keys(req.body)
    
        for(key of keys) {
/*          é o mesmo que fizer req.body.avatar_url; */
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }            
        }

        let { 
            avatar_url, 
            name, 
            birth,
            email,
            type,  
            educ_level,            
            hours} = req.body



/*      Constructor Date traz informações de Data, criando uma data numerica em ml em relação a 0hr de 1970; */
        birth = Date.parse(birth)

/*      Criando a lógica do id; */
        let id = 1
/*      Pegar o ultimo id do meu data.students; */
        const lastStudent = data.students[data.students.length - 1]
        
        if (lastStudent) {
            id = lastStudent.id + 1
        }

/*      Tenho um array que está vazio e quando ele rodar o push ele vai voltar com o objeto;
        Depois que tiver mais uma entrada ele registra posteriormente a outra; */
        data.students.push({
            id,
            avatar_url,
            name,
            birth,
            email,
            type,
            educ_level,            
            hours                      
        })


/*      PARAMETROS do writeFile:
        patch: local onde vai ser salvo o arquivo;
        objeto: usar um constructor JSON para enviar o arquivo como JSON | no stringfy tenho a opção de formatar o objeto;
        callback function: importante para não parar o app; função que passa dentro dentro da função; */

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send("Write file error.")

            return res.redirect("/students")
        })
    
        /* return res.send(req.body) */

    }

// show
exports.show = function(req, res) {
    const { id } = req.params

    const foundstudent = data.students.find(function (student) {
        return student.id == id
    })

    if (!foundstudent) return res.send("Student not found.")

    

    const student = {
        ...foundstudent,
        birth: age(foundstudent.birth)
    }

    return res.render("students/show", { student: student})
    }

// edit
exports.edit = function (req, res) {
    // req.params para buscar os dados;
    const { id } = req.params

    const foundstudent = data.students.find(function (student) {
        return student.id == id
    })

    if (!foundstudent) return res.send("Student not found.")

    const student = {
        ...foundstudent,
        birth: date(foundstudent.birth).iso,   
    }

    

    return res.render('students/edit', {student: student})
}

// put
exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundstudent = data.students.find(function (student, foundIindex) {
        if (id == student.id) {
            index = foundIindex
            return true
        }
    })

    if (!foundstudent) return res.send("Student not found.")

    const student = {
        ...foundstudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Write error!")

        return res.redirect(`/students/${id}`)
    })
}

// delete
exports.delete = function(req, res) {
    const { id } = req.body

    const filteredstudents = data.students.filter(function(student) {
        return student.id != id
    })

    data.students = filteredstudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Write error!")

        return res.redirect("/students")
    })
}

