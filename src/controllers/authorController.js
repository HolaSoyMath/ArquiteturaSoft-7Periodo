import { author } from "../models/Author.js";

class AuthorController{
    static async getAllAuthor(req, res){
        try{
            const listAuthor = await Author.find({});
            res.status(200).json(listAuthor);
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
    
    static async createAuthor(req, res){
        try{
            const newAuthor = new Author(req.body)
            await newAuthor.save();
            res.status(201).json({
                message: "Author Criado com sucesso",
                Author: newAuthor,
            }
            )
        }
        catch(error){
            res.status(500).send(error.message)
        }
    
    };
    static async getAuthorById(req, res) {
        try{
            const AuthorById = await Author.findById(req.params.id);
            if (!AuthorById){
            return res.status(404).send("Author não encontrado")
            }
            res.status(200).json(AuthorById)
            
        }
        catch(error){
            res.status(500).send(error.message)
        }
    };
    
    static async deletedAuthor(req, res){
        try{
            const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
            if (!deletedAuthor){
            return res.status(404).send("Author não encontrado")
            }
            res.status(200).json(deletedAuthor)
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
    
    static async updateAuthor(req, res){
        try{
            const updateAuthor = await Author.findByIdAndUpdate(req.params.id, req.body);
            if (!updateAuthor){
            return res.status(404).send("Author não encontrado")
            }
    
            res.status(201).json({
                message: "Authora atulai",
                Author: updateAuthor
        });
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
    
    }


export default AuthorController;