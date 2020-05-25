// module do node vai trabalhar com arquivos do sistema.
const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')
const Intl = require('intl')

exports.index = function (req, res) {
    return res.render("teachers/index", {teachers: data.teachers})
}

//create
exports.create = function (req, res) {
    return res.render("teachers/create")
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

        let { avatar_url, name, birth, educ_level, type, subjects} = req.body



/*      Constructor Date traz informações de Data, criando uma data numerica em ml em relação a 0hr de 1970; */
        birth = Date.parse(birth)
/*      Variável que irá receber a data de criação do teacher; */
        const created_at = Date.now()

/*      Criando a lógica do id; */
        let id = 1
/*      Pegar o ultimo id do meu data.students; */
        const lastTeacher = data.teachers[data.teachers.length - 1]
        
        if (lastTeacher) {
            id = lastTeacher.id + 1
        }

/*      Tenho um array que está vazio e quando ele rodar o push ele vai voltar com o objeto;
        Depois que tiver mais uma entrada ele registra posteriormente a outra; */
        data.teachers.push({
            id,
            avatar_url,
            name,
            birth,
            educ_level,
            type,
            subjects,
            created_at            
        })


/*      PARAMETROS do writeFile:
        patch: local onde vai ser salvo o arquivo;
        objeto: usar um constructor JSON para enviar o arquivo como JSON | no stringfy tenho a opção de formatar o objeto;
        callback function: importante para não parar o app; função que passa dentro dentro da função; */

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send("Write file error.")

            return res.redirect("/teachers")
        })
    
        /* return res.send(req.body) */
    }

    // show
exports.show = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function (teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found.")

    

    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        subjects: foundTeacher.subjects.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
    }

    return res.render("teachers/show", { teacher: teacher})
    }

// edit
exports.edit = function (req, res) { 
    // req.params para buscar os dados;
    const { id } = req.params

    const foundTeacher = data.teachers.find(function (teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found.")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).iso,   
    }

    

    return res.render('teachers/edit', {teacher: teacher})
}

// put
exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find(function (teacher, foundIindex) {
        if (id == teacher.id) {
            index = foundIindex
            return true
        }
    })

    if (!foundTeacher) return res.send("Teacher not found.")

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Write error!")

        return res.redirect(`/teachers/${id}`)
    })
}

// delete
exports.delete = function(req, res) {
    const { id } = req.body

    const filteredTeachers = data.teachers.filter(function(teacher) {
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Write error!")

        return res.redirect("/teachers")
    })
}

