import express from 'express'
import AuthorController from '../controllers/authorController.js';

const routes = express.Router();

routes.post('/author', AuthorController.createAuthor);
routes.get('/author', AuthorController.getAllAuthors)

export default routes