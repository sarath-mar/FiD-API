module.exports = {
    types: `
    type User{
        _id:ID!
        userName:String!
        phone:String
        email:String
        token:String
        createdAt:String
    }
    input RegistrationInput{
        userName:String!
        phone:String!
        email:String!
        password:String! 
        confirmPassword:String! 
    }
    input userSignInInput{
        emailOrPhone:String!
        password:String! 
    }

`,
    queries: `
`,
    mutations: `
    userRegistration(input:RegistrationInput):User!
    userSignIn(input:userSignInInput):User!
`}