import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema({
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;