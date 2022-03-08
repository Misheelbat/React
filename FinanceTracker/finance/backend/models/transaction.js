const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  belongs: { type: String, required: true },
});
const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
