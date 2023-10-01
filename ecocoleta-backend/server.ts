
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()

const app = express();

if (!process.env.MONGO) {
  throw new Error('The environment variable MONGO is not defined.');
}

mongoose.connect(process.env.MONGO)
    .then(() => { app.emit('conected')})
    .catch(e => console.log(e))

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

import routes from './routes';

app.use(routes);

app.on('conected', () => { 
    app.listen(3024, '0.0.0.0', () => { 
        console.log(`Host on in: http://192.168.18.154:3024 `); 
    });
});
