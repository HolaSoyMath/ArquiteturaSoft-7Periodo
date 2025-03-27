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