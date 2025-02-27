import express from "express";

const app = express();

const posts = [
    {
        id: 1,
        title: "Aula 1",
        description: "Descrição da aula 1",
        author: "Fulano 10"
    },
    {
        id: 2,
        title: "Aula 2",
        description: "Descrição da aula 2",
        author: "Fulano 20"
    },
    {
        id: 3,
        title: "Aula 3",
        description: "Descrição da aula 3",
        author: "Fulano 30"
    }
]
app.get("/", (req, res) => {
    res.status(200).send("OK, API Com Expres e Node.js");

},
);

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});



export default app;

