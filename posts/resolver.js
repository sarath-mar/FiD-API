const { Post } = require("../models/Post");

module.exports.queries = {
    getPosts: async () => {
        try {
            let posts = await Post.find()
            console.log(posts)
            posts.length ? console.log('there is post') : console.log("no posts");
            return posts
        } catch (e) {
            console.log(e);
            throw "Error"
        }

    }
}
module.exports.mutations = {
    createPost: async (_, { input }, context, info) => {
        console.log("input")
        console.log(input)
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