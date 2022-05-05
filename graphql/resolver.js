const { PostResolver } = require("../posts"); 
const resolvers = {
    Query: {
     ...PostResolver.queries,
    },
    Mutation: {
       ...PostResolver.mutations
    }
}
module.exports=resolvers