const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boardSchema = new Schema({
  name: { type: String, required: true},
  description: { type: String, required: true},
  users: { type: [String], required: true }, 
  records: { type: [Schema.Types.ObjectId], required: true}, 
  categories : { type: Schema.Types.ObjectId, required: true}
}, {
  timestamps: true,
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;