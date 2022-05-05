const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const { MONGODB } = require('./config')

const typeDefs = gql`
type Query{
    name:String
}`

const resolvers = {
    Query: {
        name: () => {
            return 'Sarath mullanarambath'
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})
mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
    console.log('MonogoDb Connected');
    server.listen({ port: 5000 }).then(res => {
        console.log(`server is running at ${res.url}`);
    })
})

