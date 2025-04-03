import { AuthorDTO } from "../dtos/authorDTO.js";
//import {author} from "../models/Author.js";
import { AuthorService } from "../services/authorService.js";

class AuthorController{
    constructor(){
        this.authorService = new AuthorService()
    }
    getAllAuthor = async(req, res) =>{
        try{
            const listAuthor = await this.authorService.getAllAuthor();
            res.status(200).json(listAuthor.map((author) => new AuthorDTO(author)));
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
    
    createAuthor = async (req, res)=>{
        try{
            const newAuthor = await this.authorService.createAuthor(req.body);
            
            res.status(201).json({
                message: "Author Criado com sucesso",
                Author: new AuthorDTO(newAuthor),
            }
            )
        }
        catch(error){
            res.status(500).send(error.message)
        }
    
    };
    getAuthorById = async (req, res) =>{
        try{
            const AuthorById = await this.authorService.getAuthorById(req.params.id);
            if (!AuthorById){
            return res.status(404).send("Author não encontrado")
            }
            res.status(200).json(new AuthorDTO(AuthorById))
            
        }
        catch(error){
            res.status(500).send(error.message)
        }
    };
    
    // static async deletedAuthor(req, res){
    //     try{
    //         const deletedAuthor = await author.findByIdAndDelete(req.params.id);
    //         if (!deletedAuthor){
    //         return res.status(404).send("Author não encontrado")
    //         }
    //         res.status(200).json(deletedAuthor)
    //     }
    //     catch(error){
    //         res.status(500).send(error.message)
    //     }
    // }
    
    // static async updateAuthor(req, res){
    //     try{
    //         const updateAuthor = await author.findByIdAndUpdate(req.params.id, req.body);
    //         if (!updateAuthor){
    //         return res.status(404).send("Author não encontrado")
    //         }
    
    //         res.status(201).json({
    //             message: "Authora atulai",
    //             Author: updateAuthor
    //     });
    //     }
    //     catch(error){
    //         res.status(500).send(error.message)
    //     }
    // }
    
    }


//export default AuthorController;
export default new AuthorController();