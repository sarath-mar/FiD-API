const { PostResolver } = require("../modules/products"); 
const { UserResolver } = require("../modules/user");
const resolvers = {
    Query: {
     ...PostResolver.queries,
     ...UserResolver.queries
    },
    Mutation: {
       ...PostResolver.mutations,
       ...UserResolver.mutations
    }
}
module.exports=resolvers