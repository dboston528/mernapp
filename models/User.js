const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  avatar: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model('user', userSchema);
