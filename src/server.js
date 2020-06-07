

const express = require("express")
const server = express()

//Configurar pasta publica
server.use(express.static("public"))

//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar camnihos da minha aplicação
//página inicial
//req: Requisição
//res: Respota
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//Ligar o servidor
server.listen(3000)