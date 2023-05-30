const { gql } = require("apollo-server");
const { ProductSchema } = require("../modules/products"); 
const { QuotationSchema } = require("../modules/quotations"); 
const { UserSchema } = require("../modules/user");

let schemas = [
    ProductSchema,
    UserSchema,
    QuotationSchema
]

const types = new Array()
const queries = new Array()
const mutations = new Array()
for (let schema of schemas) {
    if (schema.types) {
        types.push(schema.types)
    }
    if (schema.queries) {
        queries.push(schema.queries)
    }
    if (schema.mutations) {
        mutations.push(schema.mutations)
    }
}
module.exports = gql`
${types.join('\n')}
type Query {
    ${queries.join("\n")}
}
type Mutation {
    ${mutations.join("\n")}
}
` 