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
    console.log('tentou')
    try {
      const postById = await post.findById(req.params.id)
      console.log('não localizou');
      
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