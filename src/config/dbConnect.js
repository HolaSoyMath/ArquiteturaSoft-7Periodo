<<<<<<< HEAD
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

async function connectToDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING)

  return mongoose.connection;
}

export default connectToDatabase;

=======
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

async function connectToDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING)

  return mongoose.connection;
}

export default connectToDatabase;

>>>>>>> 98c24e796a31dc1e937862014619568a94fff68d
