import { BaseRepository } from "./baseRepository.js";
import { post } from "../models/Post.js";

export class PostRepository extends BaseRepository {
    constructor(){
        super(post)
    }

    async searchByTitle(Title){
        return await this.model.find({
            Title: {$regex: Title, $options: "i"}
        })
    }
}