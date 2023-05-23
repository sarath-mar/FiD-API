const { Schema, Model, ObjectId } = require("../tools")
const schemaOptions = {
    timeStamps: true
}

const productSchema = Schema(
    {
        code:{
            required:true,
            type:String
        },
        description:String,
        unit:String,
        price:Number,
        sellerName:String,
        sellerId:String,
        createdAt: {
            type: Date,
            default: () => Date.now()
        },
        
    }, schemaOptions
)
module.exports.Product = Model("Product", productSchema)