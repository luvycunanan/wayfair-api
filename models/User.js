const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { 
      type: String, 
      required: true,
      unique: true,
      index: true,
    },
    password: { 
      type: String, 
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
