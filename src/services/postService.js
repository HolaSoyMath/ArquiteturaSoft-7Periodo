
import { PostRepository } from "../repositories/postRepository.js";
import { PostDTO } from "../dtos/postDTO.js";
import { AuthorRepository } from "../repositories/authorRepository.js";
import { author } from "../models/Author.js";

export class PostService{
    constructor(){
        this.PostRepository = new PostRepository();
        this.authorRepository = new AuthorRepository();
    }

    createPost = async (PostData) => {

        const foundAuthor = await this.authorRepository.findById(PostData.author)

        if (!foundAuthor){

            throw new Error("Autor não encontrado")

        }

        const completePost = {
            ...PostDTO.fromRequest(PostData),
            author: {
                ...foundAuthor._doc
            }
        }

   
        return await this.PostRepository.create(completePost);
    }
    getAllPost = async () => {
        return await this.PostRepository.findAll();
    }
    getPostById = async (id) => {
        const foundPost = await this.PostRepository.findById(id);
        if (!foundPost){
            throw new Error("Autor não encontrado!")
        }
        return foundPost
    }
    // updatePost = async (id, PostData) => {
    //     const updatedPost = await this.PostRepository.update(id, PostData);
    //     if (!updatedPost){
    //         throw new Error("Autor não encontrado!")
    //     }
    //     return updatedPost
    // }
    // deletePost = async (id) => {
    //     const deletePost = await this.PostRepository.delete(id);
    //     if (!deletePost){
    //         throw new Error("Autor não encontrado!")
    //     }
    //     return deletePost
    // }

    // searchAutorByName = async (name) =>{
    //     if(!name || name.trim() === ""){
    //         throw new Error("Informar o nome do Autor")
    //     }
    //     return await this.PostRepository.searchByName(name)
    // }

}
