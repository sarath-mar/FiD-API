const { gql } = require("apollo-server");
const { PostSchema } = require("../modules/posts"); 
const { UserSchema } = require("../modules/user");

let schemas = [
    PostSchema,
    UserSchema
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