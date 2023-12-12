const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, maxlength: 45 },
  avatar: { type: String, maxlength: 100 },
  email: { type: String, maxlength: 45 },
  email_verified_at: { type: Date },
  password: { type: String, required: true, maxlength: 255 },
  remember_token: { type: String, maxlength: 100 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
//   roles_id: [{ type: Schema.Types.ObjectId, ref: 'Role' }]
});

module.exports = mongoose.model('User', userSchema);
