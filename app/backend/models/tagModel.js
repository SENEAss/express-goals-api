const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  title: { type: String, required: true, maxlength: 45 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date }
});

module.exports = mongoose.model('Tag', tagSchema);
