const express = require ('express')

const app = express()

const path = require ('path')

const publicpath = path.resolve('public')

app.use(express.static(publicpath))

const port = process.env.PORT || 3003;

app.listen(port,() =>console.log("Servidor corriendo en el puerto ${port}"));


app.get('/', (req, res) => {

    res.sendFile (path.resolve('views/home.html'))})

    app.get('/login', (req, res) => {

        res.sendFile (path.resolve('views/login.html'))})

        app.get('/register', (req, res) => {

            res.sendFile (path.resolve('views/register.html'))})





