const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true, maxlength: 255 },
  slug: { type: String, required: true, maxlength: 255 },
  content: { type: String, required: true },
  cover: { type: String, maxlength: 100 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
  users_id: { type: Schema.Types.ObjectId, ref: 'User' },
//   categories_id: { type: Schema.Types.ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Article', articleSchema);
