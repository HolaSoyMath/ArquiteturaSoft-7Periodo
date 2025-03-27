import {author} from "../models/Author.js";

class AuthorController {
  // Criar autor
  static async createAuthor (req, res) {
    try {
        const newAuthor = new author(req.body)
        await newAuthor.save();
        res.status(201).json({
            message: 'Autor criado com sucesso',
            author: newAuthor
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
  } 

  // Get all authors
  static async getAllAuthors(req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

}

export default AuthorController