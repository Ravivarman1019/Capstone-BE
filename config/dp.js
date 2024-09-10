import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('Error connecting to MongoDB:', err));
