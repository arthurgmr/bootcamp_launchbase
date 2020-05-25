/* nunjacks é um motor que trabalha com templets */

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noChache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/54001923?s=460&u=d3e8557d29c2b280ba10365247aa4d3fbb693d96&v=4",
        name: "Arthur Machado",
        role: "Aluno - Rockeseat",
        description: 'Bacharel em Sistemas de Informação e iniciante em programação Javascript.<br /><a href="https://github.com/arthurgmr" target="_blank">Projetos no GitHub</a>',
        links: [
            { name:"GitHub", url: "https://github.com/arthurgmr"},
            { name:"Linkedin", url: "https://www.linkedin.com/in/arthur-geraldo-machado-raimundo-50997a16a/"},
            { name:"Instagram", url: "https://www.instagram.com/arthurgmr/"}
        ]

    }
    return res.render("about", { about: about})

})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })

})

server.get("/video", function (req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found")
    }

    return res.render("video", { item: video })

    res.send (id)
})

server.listen(5000, function () {
    console.log("server is running")
})