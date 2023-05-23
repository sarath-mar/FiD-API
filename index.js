const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const { MONGOOSE_URL ,PORT} = require('./config')
const { GraphqlSchema, GraphqlResolver } = require('./graphql')

const server = new ApolloServer({
    typeDefs:GraphqlSchema,
    resolvers:GraphqlResolver ,
    context:({req,res})=>{
        // console.log(q.req.user) 
        return req
    }
})
mongoose.connect(MONGOOSE_URL, { useNewUrlParser: true }).then(() => {
    console.log('MonogoDb Connected');
    server.listen({ port: PORT }).then(res => {
        console.log(`server is running at ${res.url}`); 
    })
})

