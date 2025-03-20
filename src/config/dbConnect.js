import mongoose from "mongoose";

async function connectToDatabase(){
    mongoose.connect("mongodb+srv://Eduward55:SENHA123@cluster0.bwh8u.mongodb.net/api-post?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}

export default connectToDatabase();

