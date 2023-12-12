const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
  users_id: { type: Schema.Types.ObjectId, ref: 'User' },
  articles_id: { type: Schema.Types.ObjectId, ref: 'Article' }
});

module.exports = mongoose.model('Comment', commentSchema);
