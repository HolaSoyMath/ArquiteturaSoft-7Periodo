
import { AuthorRepository } from "../repositories/authorRepository.js";
import { AuthorDTO } from "../dtos/authorDTO.js";

export class AuthorService{
    constructor(){
        this.AuthorRepository = new AuthorRepository();
    }

    // Criar um novo autor
    createAuthor = async (authorData) => {
        const author = AuthorDTO.fromRequest(authorData);
        return await this.AuthorRepository.create(author);
    }

    // Obter lista de todos os autores
    getAllAuthor = async () => {
        return await this.AuthorRepository.findAll();
    }

    // Obter autor pelo seu ID
    getAuthorById = async (id) => {
        const foundAuthor = await this.AuthorRepository.findById(id);
        if (!foundAuthor){
            throw new Error("Autor não encontrado!")
        }
        return foundAuthor
    }

    // Atualizar informações de Autor
    updateAuthor = async (id, authorData) => {
        const updatedAuthor = await this.AuthorRepository.update(id, authorData);
        if (!updatedAuthor){
            throw new Error("Autor não encontrado!")
        }
        return updatedAuthor
    }

    // Deletar autor
    deleteAuthor = async (id) => {
        const deleteAuthor = await this.AuthorRepository.delete(id);
        if (!deleteAuthor){
            throw new Error("Autor não encontrado!")
        }
        return deleteAuthor
    }

    // Procurar autor pelo nome
    searchAutorByName = async (name) =>{
        if(!name || name.trim() === ""){
            throw new Error("Informar o nome do Autor")
        }
        return await this.AuthorRepository.searchByName(name)
    }
}
