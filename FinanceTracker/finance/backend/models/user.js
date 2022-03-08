const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, minlength: 3, unique: true },
  name: { type: String, minlength: 3, unique: true },
  password: { type: String, required: true, minlength: 4 },
});
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare(password, this.password);
};
const User = mongoose.model('User', userSchema);
module.exports = User;
