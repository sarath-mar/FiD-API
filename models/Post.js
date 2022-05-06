// const { } = require("mongoose");
const { Schema, ObjectId, Model } = require("../tools");

const schemaOptions = {
    timestamps: true,
};
const PostSchema = new Schema({
    body: String,
    userName: String,
    comments: [
        {
            body: String,
            userName: String
        }
    ],
    likes: [
        {
            userName: String
        }
    ],
    user: {
        type: ObjectId,
        ref: 'Users'
    }
},
    schemaOptions)
module.exports.Post = Model('Post', PostSchema) 