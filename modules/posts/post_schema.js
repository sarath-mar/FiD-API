module.exports = {
    types: `
type post{
    _id:ID!
    body:String
    userName:String
    createdAt:String
}
input postInput{
    body:String
    userName:String!
}
input testInput{
   name:String,
   email:String,
   user:ID,
   post:ID,
   age:Int 
}
type test{
   name:String,
   email:String,
   user:ID,
   posts:post, 
   createdAt:String,
   age:Int 
}

`,
    queries: `
    getPosts:[post]
    getTests:[test]
`,
    mutations: `
    createPost(input:postInput):post
    createTest(input:testInput):test
`}