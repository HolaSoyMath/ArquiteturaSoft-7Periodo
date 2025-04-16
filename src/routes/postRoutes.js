import express from "express"
import PostController from "../controllers/postController.js"

const routes = express.Router();

routes.get("/post", PostController.getAllPosts);
routes.post("/post", PostController.createPost);
routes.get("/post/:id", PostController.getPostById);


export default routes;


