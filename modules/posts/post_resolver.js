const { Test } = require('../../models/Test')
const { customError, errorName } = require('../../utils')
const { checkAuth } = require('../../utils/authentification')
const PostHelper = require('./post_helper')

module.exports.queries = {
    getPosts: async () => PostHelper.getPosts(),
    getTests:async()=>{
        // return  Test.find()
        // let t1=new Date()
        let data1=
        await Test.findOne().populate('posts')
        // let data2=await Test.aggregate(
          
        // )
        // .execPopulate() 
        // await Test.find().byName('one')
        // await Test.findByName('TWO')
        // await Test.find({name:(new RegExp("one", 'i'))})
        // let t2 =new Date()
        // console.log(t2-t1);
        // console.log(data1)
        // let t3=new Date()
        // let data2=await Test.where("name").equals("test two")
        // let t4=new Date()
        // console.log(t4-t3)
        console.log(data1)
        console.log(data1.posts)
        
        console.log(data1[0].nameEmail) 
        console.log(data1[0].posts)
        // console.log(data1[0].one())
        return data1

    }
}
module.exports.mutations = {
    createPost: async (_, { input }, context, info) => {
        let auth = await checkAuth(context)
        if (auth) {
            return PostHelper.createPosts(input)
        }
    },
    createTest: async (_, { input }, context, info) => {

        try {
            let data = await Test.create(input)
            console.log(data)
            return data
        } catch (err) {
            console.log(err.message)
            if (err.message.includes("Test validation failed") && err.message.includes('email')) {
                throw customError("Email is required")
            }
            if (err.message.includes("Test validation failed") && err.message.includes('age')) {
                throw customError("Age is in btwn 10 and 100")
            }
            if (err.message.includes("duplicate key error collection") && err.message.includes('email')) {
                throw customError("Email is existed")
            }

        }

    }
}
