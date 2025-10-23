import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Post = mongoose.model("Post", postSchema, "posts");
export default Post;