import express from "express"
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.getAllAuthor);
routes.post("/authors", AuthorController.createAuthor);
routes.get("/authors/:id", AuthorController.getAuthorById);
routes.get("/authors/search/:name", AuthorController.searchAuthorByName)
routes.delete("/authors/:id", AuthorController.deletedAuthor);
routes.put("/authors/:id", AuthorController.updateAuthor);


export default routes;


