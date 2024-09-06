const express = require('express')
const controller = require('./controller')

const router = express.Router()

module.exports = router

router.get('/games', controller.index) //rota mostra todos os jogos
router.get('/games/:id', controller.show) //rota mostra algo jogo em específico
router.post('/games', controller.save) //rota pra adicionar novos jogos
router.post('/games/:id/genres', controller.addGenre) //rota pra adicionar um genero novbo pra um jogo já existente

