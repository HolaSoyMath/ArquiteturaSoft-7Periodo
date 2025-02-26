import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("API com Express e Node.js")
})

app.get('/posts', (req, res) => {
    res.status(200).send("Rota de postagens")
})

app.get('/autores', (req, res) => {
    res.status(200).send("Rota de autores")
})

export default app;
