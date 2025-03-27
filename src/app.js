import express from "express";
import connectToDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js";

const connection = await connectToDatabase;
connection.on("error", (error) => {
    console.error("Erro de conexão: ", error)
});
connection.on("open", () => {
    console.log("conexão com atlas sucesso: ")
});


const app = express();
routes(app);
// app.use(express.json());//middleware

// const posts = [
//     {
//         id: 1,
//         title: "Aula 1",
//         description: "Descrição da aula 1",
//         author: "Fulado de Tal"
//     },
//     {
//         id: 2,
//         title: "Aula 2",
//         description: "Descrição da aula 2",
//         author: "Beltrano da Silva"
//     },
//     {
//         id: 3,
//         title: "Aula 3",
//         description: "Descrição da aula 3",
//         author: "Ciclano Souza"
//     },
// ]

// function searchPost(id) {
//     return posts.findIndex(posts => {
//         return posts.id === Number(id);
//     });
// }

// app.get("/", (req, res) => {
//     res.status(200).send("API com Express e Node.js");
// });


// app.post("/posts", (req, res) => {
//     posts.push(req.body);
//     res.status(201).send("Post criado com sucesso!");
// });

// app.get("/posts/:id", (req, res) => {
//     const index = searchPost(req.params.id);
//     res.status(200).json(posts[index]);
// });

// app.put("/posts/:id", (req, res) => {
//     const index = searchPost(req.params.id);
//     posts[index].title = req.body.title;
//     posts[index].description = req.body.description;
//     posts[index].author = req.body.author;
//     res.status(200).json(posts[index]);
// });

// app.delete("/posts/:id", (req, res) => {
//     const index = searchPost(req.params.id);
//     posts.splice(index, 1);
//     res.status(200).send("Post removido com sucesso!");
// });

// app.get("/post", async (req, res) => {
//     try{
//         const listPosts = await post.find({});
//         res.status(200).json(listPosts);
//     }
//     catch(error){
//         res.status(500).send(error.message)
//     }
// });

// app.post("/post", async (req, res) => {
//     try{
//         const newPost = new post(req.body)
//         await newPost.save();
//         res.status(201).json({
//             message: "Post Criado com sucesso",
//             post: newPost,
//         }
//         )
//     }
//     catch(error){
//         res.status(500).send(error.message)
//     }

// });

// app.get("/post/:id", async (req, res) => {
//     try{
//         const postById = await post.findById(req.params.id);
//         if (!postById){
//         return res.status(404).send("Post não encontrado")
//         }
//     }
//     catch(error){
//         res.status(500).send(error.message)
//     }
// });

// app.delete("/posts/:id", async (req, res) => {
//     try{
//         const deletedPost = await post.findByIdAndDelete(req.params.id);
//         if (!deletedPost){
//         return res.status(404).send("Post não encontrado")
//         }
//     }
//     catch(error){
//         res.status(500).send(error.message)
//     }
// });

export default app;