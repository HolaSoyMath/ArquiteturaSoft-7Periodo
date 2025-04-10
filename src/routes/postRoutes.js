import express from "express"
import PostController from "../controllers/postController.js"

const routes = express.Router();

routes.get("/post", PostController.getAllPost);
routes.post("/post", PostController.createPost);
routes.get("/post/:id", PostController.getPostById);
// routes.delete("/post/:id", PostController.deletedPost);
// routes.put("/post/:id", PostController.updatePost);


export default routes;


