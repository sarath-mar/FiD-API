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

`,
    queries: `
    getPosts:[post]
`,
    mutations: `
    createPost(input:postInput):post
`}