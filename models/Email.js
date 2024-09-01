
import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const Email = mongoose.model('Email', emailSchema);

export default Email;
