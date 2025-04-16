import { PostDTO } from "../dtos/postDTO.js";
import { PostService } from "../services/PostService.js";

class PostController{

    postService = new PostService()

    // Get All Posts
    getAllPosts = async(req, res) => {
        try{
            const listPosts = await this.postService.getAllPosts();
            res.status(200).json(listPosts.map((Post) => new PostDTO(Post)));
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }

    // Create New Post
    createPost = async(req, res) => {
        try{
            const newPost = await this.postService.createPost(req.body);
            
            res.status(201).json({
                message: "Post Criado com sucesso",
                Post: new PostDTO(newPost),
            }
            )
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
    
    getPostById = async (req, res) =>{
        try{
            const PostById = await this.postService.getPostById(req.params.id);
            if (!PostById){
            return res.status(404).send("Post não encontrado")
            }
            res.status(200).json(new PostDTO(PostById))
            
        }
        catch(error){
            res.status(500).send(error.message)
        }
    };
}

export default new PostController();