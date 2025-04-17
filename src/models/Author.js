<<<<<<< HEAD
import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    //id: {type: mongoose.Schema.Types.ObjectId,},
    name: {type: String, required: [true,"Nome do autor é obrigatorio"]},
    email: {type: String, required: [true,"E-mail do autor é obrigatório"]},
}
, 
{
    versionKey: false,
    timestamps: true

});

const author = mongoose.model("authors", authorSchema)

export {author, authorSchema};


=======
import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, required: true},
  email: {type: String, required: true},
}, {versionKey: false})

const author = mongoose.model("authors", authorSchema);
// authors é o nome da tabela no mongoDB online

export { author, authorSchema };
>>>>>>> 98c24e796a31dc1e937862014619568a94fff68d
