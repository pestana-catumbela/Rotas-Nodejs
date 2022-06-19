const Express = require('express')
const AppRotas = Express()
const PORT = 3000

AppRotas.get('/usuario', (req, res) => {
    res.send("LISTA DE USUÁRIOS")
})

AppRotas.post('/usuario', function(req, res){
    res.send("INSERIR NOVO USUARIO")
})

AppRotas.put('/usuario/:id', function(req, res){
    res.send(`ALTERAR USUÁRIO COM O ID ${req.params.id}`)
})

AppRotas.delete('/usuario/:id', (req, res) => {
    res.send(`APAGAR USUARIO COM ID ${req.params.id}`)
})

AppRotas.listen(PORT, () => {
    console.log(`Servidor Rodando no endereço http://localhost:${PORT}`);
})