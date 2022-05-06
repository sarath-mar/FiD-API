const { PostResolver } = require("../posts"); 
const { UserResolver } = require("../user");
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