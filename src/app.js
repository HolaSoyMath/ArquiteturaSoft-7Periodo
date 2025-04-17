<<<<<<< HEAD
import express from 'express'
import connectToDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const connection = await connectToDatabase();

connection.on('error', (error) => {
    console.error('Erro de conexão', error);
})

connection.on('open', () => {
    console.log('Conexão com o banco de dados realizada com sucesso');
})

const app = express();
routes(app);

export default app;
=======
import express from 'express'
import connectToDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const connection = await connectToDatabase();

connection.on('error', (error) => {
    console.error('Erro de conexão', error);
})

connection.on('open', () => {
    console.log('Conexão com o banco de dados realizada com sucesso');
})

const app = express();
routes(app);

export default app;
>>>>>>> 98c24e796a31dc1e937862014619568a94fff68d
