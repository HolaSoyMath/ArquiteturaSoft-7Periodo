import post from "../models/Post.js"

class PostController{
    static async getAllPosts(req, res){
    try{
        const listPosts = await post.find({});
        res.status(200).json(listPosts);
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

static async createPost(req, res){
    try{
        const newPost = new post(req.body)
        await newPost.save();
        res.status(201).json({
            message: "Post Criado com sucesso",
            post: newPost,
        }
        )
    }
    catch(error){
        res.status(500).send(error.message)
    }

};
static async getPostById(req, res) {
    try{
        const postById = await post.findById(req.params.id);
        if (!postById){
        return res.status(404).send("Post não encontrado")
        }
        res.status(200).json(postById)
        
    }
    catch(error){
        res.status(500).send(error.message)
    }
};

static async deletedPost(req, res){
    try{
        const deletedPost = await post.findByIdAndDelete(req.params.id);
        if (!deletedPost){
        return res.status(404).send("Post não encontrado")
        }
        res.status(200).json(deletedPost)
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

static async updatePost(req, res){
    try{
        const updatePost = await post.findByIdAndUpdate(req.params.id, req.body);
        if (!updatePost){
        return res.status(404).send("Post não encontrado")
        }

        res.status(201).json({
            message: "POsta atulai",
            post: updatePost
    });
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

}

export default PostController;