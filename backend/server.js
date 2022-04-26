import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
 import productRouter from './routes/productRoutes.js';

dotenv.config();
// connect to the database in the mongodb
mongoose.connect(process.env.connectString).then(() => {
  console.log('Connect to database sucessfully');
}).catch((err) => {
  console.log(err.message);
});

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);


const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});