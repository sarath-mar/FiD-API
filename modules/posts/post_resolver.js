const { checkAuth } = require('../../utils/authentification')
const PostHelper = require('./post_helper')

module.exports.queries = {
    getPosts: async () => PostHelper.getPosts()
}
module.exports.mutations = {
    createPost: async (_, { input }, context, info) => {
        let auth = await checkAuth(context)
        if (auth) {
            return PostHelper.createPosts(input)
        }

    }
}
