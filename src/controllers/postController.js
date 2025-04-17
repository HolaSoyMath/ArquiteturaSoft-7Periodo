<<<<<<< HEAD
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
=======
import post from "../models/Post.js";

class PostController{
  static async getAllPosts(req, res) {
    try {
      const listPosts = await post.find({});
      res.status(200).json(listPosts)
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // Create new post
  static async createPost (req, res) {
    try {
        const newPost = new post(req.body)
        await newPost.save();
        res.status(201).json({
            message: 'Post criado com sucesso',
            post: newPost
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
  }

  // Get Post by ID
  static async getPostByID (req, res) {
    try {
      const postById = await post.findById(req.params.id)
      
      if (!postById) {
          return res.status(404).send("Post não encontrado")
      }
      res.status(200).json(postById)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  //Delete Post by ID
  static async deletePost (req, res) {
    try {
      const deletedPost = await post.findByIdAndDelete(req.params.id)
      if (!deletedPost) {
          return res.status(404).send("Post não encontrado")
      }
      res.status(200).send('Post removido com sucesso')
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  // Update Post by ID
  static async updatePost (req, res) {
    try {
      const updateById = await post.findByIdAndUpdate(req.params.id, req.body)
      if (!updateById) {
          return res.status(404).send("Post não encontrado")
      }
      res.status(200).json(updateById)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
}

export default PostController
>>>>>>> 98c24e796a31dc1e937862014619568a94fff68d
