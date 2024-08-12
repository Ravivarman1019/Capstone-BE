
const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  trash: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Email = mongoose.model('Email', emailSchema);
module.exports = Email;
