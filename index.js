import express from 'express';
import connectDB from './config/dp.js';
import userRoutes from './routes/auth.js';
import emailRoutes from './routes/email.js';
import dotenv from 'dotenv';
import db from './config/dp.js';


dotenv.config();

const app = express();

connectDB();


app.use(express.json());


app.use('/api/users',userRoutes);
app.use('/api/emails', emailRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong' });
});
export default app;