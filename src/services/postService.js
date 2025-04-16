
import { PostRepository } from "../repositories/postRepository.js";
import { PostDTO } from "../dtos/postDTO.js";
import { AuthorRepository } from "../repositories/authorRepository.js";
import { author } from "../models/Author.js";

export class PostService{
    constructor(){
        this.PostRepository = new PostRepository();
        this.authorRepository = new AuthorRepository();
    }

    // Criar um novo Post
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

    // Obter todos os posts
    getAllPosts = async () => {
        return await this.PostRepository.findAll();
    }

    // Obter posts pelo ID do autor
    getPostById = async (id) => {
        const foundPost = await this.PostRepository.findById(id);
        if (!foundPost){
            throw new Error("Autor não encontrado!")
        }
        return foundPost
    }
}
