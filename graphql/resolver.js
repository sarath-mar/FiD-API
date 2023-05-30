const { ProductResolver } = require("../modules/products"); 
const { QuotationResolver } = require("../modules/quotations"); 
const { UserResolver } = require("../modules/user");
const resolvers = {
    Query: {
     ...ProductResolver.queries,
     ...QuotationResolver.queries,
     ...UserResolver.queries
    },
    Mutation: {
       ...ProductResolver.mutations,
       ...QuotationResolver.mutations,
       ...UserResolver.mutations
    }
}
module.exports=resolvers