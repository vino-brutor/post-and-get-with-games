const express = require('express')
const path = require('path')
const router = require('./routes')

const app = express()

app.set('view engine', 'ejs') //tipo de view
app.use(express.static(path.join(__dirname, 'node_modules'))) //usa o node modules
app.use(express.urlencoded({extended:true})) // traduz as requisiç~eos de links para texto
app.use(express.json()) //converte o corpo da requisição pra um objeto javascript
//o express.json precisa ficar ANTES do router 
app.use(router) //usa as rotas do arquivo de rotas

const PORT = 3000
app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))