const { Post } = require("../models/Post");
const PostHelper = require('./post_helper')

module.exports.queries = {
    getPosts: async () => PostHelper.getPosts()
}
module.exports.mutations = {
    createPost: async (_, { input }, context, info) => {
        return PostHelper.createPosts(input)
    }
}