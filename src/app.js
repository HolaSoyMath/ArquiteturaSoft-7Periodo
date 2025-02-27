import express from "express";

const app = express();
app.use(express.json()); //middleware

function searchPost(id){
    return posts.findIndex(posts => {
        return posts.id === Number(id)
    });

};

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

app.post("/posts", (req, res) => {
    posts.push(req.body);
    res.status(201).send("Post criado com sucesso");
});

app.get("/posts/:id", (req, res) => {
    const index = searchPost(req.params.id);
    res.status(200).json(posts[index]);
});

export default app;

app.put("/posts/:id", (req, res) => {
    const index = searchPost(req.params.id);

    posts[index].title = req.body.title 
    posts[index].description = req.body.description
    posts[index].author = req.body.author
    res.status(200).json(posts[index]);

})

app.delete("/posts/:id", (req, res) => {
    const index = searchPost(req.params.id);
    posts.splice(index, 1);
    res.status(200).send("Post removido COM SUCESSO!" );

})