const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const { MONGODB } = require('./config')
const { GraphqlSchema, GraphqlResolver } = require('./graphql')
// const { Post } = require('./models/Post')

// const typeDefs = gql`
// type post{
//     _id:ID!
//     body:String
//     userName:String
// }
// input postInput{
//     body:String
//     userName:String!
// }
// type Query{
//     getPosts:[post]
// }
// type Mutation{
//     createPost(input:postInput):post
// }
// `

// const resolvers = {
//     Query: {
//         getPosts: async () => {
//             try {
//                 let posts = await Post.find()
//                 console.log(posts)
//                 posts.length ? console.log('there is post') : console.log("no posts");
//                 return posts
//             } catch (e) {
//                 console.log(e);
//                 throw "Error"
//             }

//         }
//     },
//     Mutation: {
//         createPost: async (_, { input }, context, info) => {
//             console.log("input")
//             console.log(input)
//             try {
//                 if (input) {
//                     let newPost = await Post.create(input)
//                     if (newPost) {
//                         console.log(newPost)
//                         return newPost
//                     }
//                 }else{
//                     throw new Error("No Input")
//                 }
//             } catch (e) {
//                 throw new Error(e)
//             }
//         }
//     }
// }

const server = new ApolloServer({
    typeDefs:GraphqlSchema,
    resolvers:GraphqlResolver ,
    context:({req,res})=>{
        // console.log(q.req.user) 
        return req
    }
})
mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
    console.log('MonogoDb Connected');
    server.listen({ port: 5000 }).then(res => {
        console.log(`server is running at ${res.url}`);
    })
})

