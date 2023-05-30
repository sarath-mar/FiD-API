const { Schema, Model, ObjectId } = require("../tools")
const schemaOptions = {
    timeStamps: true
}

const quotationSchema = Schema(
    {
        products: [
            {
                product: {
                    type: ObjectId,
                    ref: "Product",
                },
                quantity: Number,
            }
        ],
        to: {
            name: String,
            adress: String
        },
        createdAt: {
            type: Date,
            default: () => Date.now()
        },

    }, schemaOptions
)
module.exports.Quotation = Model("Quotation", quotationSchema)