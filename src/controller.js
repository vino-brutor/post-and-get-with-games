const games = [
    { id: 1, name: 'Legend of Mana', genres: ['action-rpg'], year: 1999 },
    { id: 2, name: 'World of Warcraft', genres: ['mmorpg'], year: 2004 },
    { id: 3, name: 'Metal Gear Solid', genres: ['stealth', 'action-adventure'], year: 1998 },
    { id: 4, name: 'Sonic Adventure 2', genres: ['platformer'], year: 2001 },
    { id: 5, name: 'Age of Empires 2', genres: ['real-time-strategy'], year: 1999 }
	] //array com os jogos

module.exports = {
    //GET /games
    index: (req,res) => {
        res.json(games) //devolve os jogos como json
    },

    //GET/games/:id
    show:(req,res) => {
        const {id} = req.params //pega o id do aprametro

        const game = games.find(game => game.id === +id) //procura o game pelo id

        if(!game){
            res.status(404) //como da erro importante mudar o status da requisição, pq n faz sentido dar como sucesso e n ter nenhum jogo
            res.json({message: 'Jogo não encotnrado'})
        }else{
            res.json(game) //json pra responder com um arquivo json 
        }
    },

    //POST/games
    save: (req, res) =>{
        const {name, genres, year} = req.body // pega as informaações da requisição
        const newGame = {
            id: Math.floor(Math.random() * 9999999),
            name,
            genres,
            year,
        } //cria o novo jogo

        games.push(newGame) //coloca o novo jogo no array de jogos
        res.status(201) // satus de sucesso
        res.json(newGame) //o json inplicitamente tbm roda a função res.end()
    },

    //PUT/games/:id

    //DELETE/games/:id

    //post/games/:id/genres
    addGenre: (req, res) => {
        const {id} = req.params //pega o id do jogo pelo link
        const {genre} = req.body // pega o corpo da requisção json

        const gameIndex = games.findIndex(game => game.id === +id) //n esquecer de transofrmar o id num número
        if(gameIndex === -1){
            return res.status(404).json({message: "Jogo não obtido"}) //vc se o jogo tem um index no array
        }
        if(typeof genre !== 'string' || games[gameIndex].genres.includes(genre)){
            return res.status(400).json({message: "Gênero inválido"}) //ve se o jogo é do formato válido ouuu se já não tá na lista
        }

        games[gameIndex].genres.push(genre) //adiciona o genero na lista de generos
        res.json(games[gameIndex]) // responde o servidor com o jogo atualizado
    }
}