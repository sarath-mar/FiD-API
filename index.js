const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const { MONGOOSE_URL, PORT, SECERETKEY } = require('./config')
const { GraphqlSchema, GraphqlResolver } = require('./graphql')
const express = require("express")
const { checkAuth } = require("./utils/authentification")

// const graphqlHTTP = require('ap');
// const expressJwt = require("express-jwt");
const app = express()
// const auth = expressJwt({

//     secret: SECERETKEY,
//     credentialsRequired: false, 
// });
// app.use("/graphql", auth);
const server = new ApolloServer({
    typeDefs: GraphqlSchema,
    resolvers: GraphqlResolver,
    context: async ({ req, res }) => {
        if (req.body.operationName !== 'userSignIn') {
            let auth = await checkAuth(req)
            return auth
        } else {
            return req
        }

    }
})
mongoose.connect(MONGOOSE_URL, { useNewUrlParser: true }).then(() => {
    console.log('MonogoDb Connected');
    server.listen({ port: PORT }).then(res => {
        console.log(`server is running at ${res.url}`);
    })
})

