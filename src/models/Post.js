<<<<<<< HEAD
import mongoose from "mongoose";
import {authorSchema} from "./Author.js";

const postSchema = new mongoose.Schema({
    //id: {type: mongoose.Schema.Types.ObjectId,},
    title: {type: String, required: [true,"Título do post é obrigatório"]},
    description: {type: String},
    author: authorSchema, 
}, {   versionKey: false,
    timestamps: true});

const post = mongoose.model("post", postSchema);

export {post, postSchema};
=======
import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const postSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  title: {type: String, required: true},
  description: {type: String},
  // author: {type: String, required: true}
  author: authorSchema,
}, {versionKey: false})

const post = mongoose.model("posts", postSchema)
// posts é o nome da tabela no mongoDB online
export default post
>>>>>>> 98c24e796a31dc1e937862014619568a94fff68d
