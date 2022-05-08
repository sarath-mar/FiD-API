const userHelper=require('./user_helper')
module.exports.queries = {
}
module.exports.mutations = {
    userRegistration: async (_, { input }, context, info) => {
        return userHelper.userRegistration(input)
    },
    userSignIn: async (_, { input }, context, info) => {
        return userHelper.userSignIn(input)
    }
}