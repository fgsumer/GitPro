const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  personalModel: { type: Schema.Types.ObjectId, ref: 'Personal' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
