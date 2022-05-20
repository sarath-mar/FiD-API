const { Schema, Model, ObjectId } = require("../tools")
const schemaOptions = {
    timeStamps: true
}

const testSchema = Schema(
    {
        name: String,
        age: {
            // we can put min and max age
            type: Number,
            min: 10,
            max: 100,
            vaidate: {
                validator: v => v % 2 === 0,
                message: props => `${props.value} should be even no`
            }

        },
        email: {
            // its required and save in lowercase and its will be unique
            type: String,
            required: true,
            lowercase: true,
            minLength: 10,
            // uppercase:true,
            unique: true,
        },
        createdAt: {
            type: Date,
            default: () => Date.now()
        },
        user: {
            type: ObjectId,
            ref: "User"
        },
        post: {
            type: ObjectId,
            ref: "User"
        }
    }, schemaOptions
)
// testSchema.methods= {
//   one:()=>{
//       console.log("my name is "+this.name)
//   }
// },
// methods is only for single data
testSchema.methods.one=function(){
    console.log("my name is "+this.name)
}
// statics is for whole data like findByid like that
testSchema.statics.findByName=function(name){
    return this.where({name:new RegExp(name,'i')})
    // return this.where('name').equals(new RegExp(name,'i'))
}

// query is used after when a query is usd ie when we use find().the query method
testSchema.query.byName=function(name){
    return this.find({name:new RegExp(name,'i')})
}
// virtual is something that is not saved in documetnt
testSchema.virtual("nameEmail").get(function(){
    console.log(`${this.name} ${this.email}`)
})

testSchema.virtual("posts", {
    ref: "Post",
    localField: "post",
    foreignField: "_id",
    justOne: true
  });
// testSchema.virtual("subscribed_packages", {
//     ref: "Subscription",
//     localField: "_id",
//     foreignField: "customer",
//   });

// we can use middleware ie when an action take place this will work ie 
// if befor the action we use "pre"  or if after the action we use post
// for eg befor calling save then we use pre('save')

testSchema.pre('find',(next)=>{
console.log("befor find middle ware works")
next()
})
testSchema.post('find',(doc,next)=>{
// here doc is used for this purpose
console.log("after find middle ware works")
next() 
})
module.exports.Test = Model("Test", testSchema)