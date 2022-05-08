const { Post } = require("../../models/Post");

module.exports = {
    getPosts: async () => {
        try {
            let posts = await Post.find()
            return posts
        }
        catch (e) {
            console.log(e);
            throw "Error"
        }
    },
    createPosts: async (input) => {
        try {
            if (input) {
                let newPost = await Post.create(input)
                if (newPost) {
                    console.log(newPost)
                    return newPost
                }
            } else {
                throw new Error("No Input")
            }
        } catch (e) {
            throw new Error(e)
        }
    }
}