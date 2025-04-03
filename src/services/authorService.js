import { author } from "../models/Author.js";
import { AuthorRepository } from "../repositories/authorRepository.js";
import { AuthorDTO } from "../dtos/authorDTO.js";

export class AuthorService{
    constructor(){
        this.AuthorRepository = new AuthorRepository();
    }

    createAuthor = async (authorData) => {
        const author = AuthorDTO.fromRequest(authorData);
        return await this.AuthorRepository.create(author);
    }
    getAllAuthor = async () => {
        return await this.AuthorRepository.findAll();
    }
    getAuthorById = async (id) => {
        const foundAuthor = await this.AuthorRepository.findById(id);
        if (!foundAuthor){
            throw new Error("Autor não encontrado!")
        }
        return foundAuthor
    }
//     updateAuthor = async () => {
//         return await this.AuthorRepository 
//     }
//     deleteAuthoor = async () => {
//         return await this.AuthorRepository 
//     }
//     searchAutorByName  = async () => {
//         return await this.AuthorRepository
//     }
}
