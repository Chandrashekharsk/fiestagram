import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,"username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true,"email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true,"username is required"],
  },
  profilePicture:{
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  followers: [
    { type: mongoose.Schema.Types.ObjectId, ref:"User"},
  ],
  following:[
    { type: mongoose.Schema.Types.ObjectId, ref:"User"}
  ],
  posts: [
    { type: mongoose.Schema.Types.ObjectId, ref:"Post"}
  ],
  bookmarks: [
    {type: mongoose.Schema.Types.ObjectId, ref:"Post"}
  ]
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);
export default User;