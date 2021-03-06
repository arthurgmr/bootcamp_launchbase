const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express ()

server.use(express.urlencoded({ extended: true })) /* responsável por funcionar o require.body */
server.use(express.static('public'))
server.use(methodOverride('_method')) /* esta dep está sobrescrevendo o tipo do método. */
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function (){
    console.log("server is running")
})