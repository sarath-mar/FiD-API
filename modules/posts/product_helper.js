const { default: mongoose } = require("mongoose");
const { Product } = require("../../models/Product");

module.exports = {
    getProducts: async () => {
        try {
            let products =  await Product.find() 
            totalCount = await Product.countDocuments()
            return {
                data:products,
                totalCount
            }
        }
        catch (e) {
            console.log(e);
            throw  new Error(e)
        }
    },
    createProduct: async (input) => {
        try {
            if (input) {
                let newProduct = await Product.create(input)
                if (newProduct) {
                    console.log(newProduct)
                    return newProduct
                }
            } else {
                throw new Error("No Input")
            }
        } catch (e) {
            throw new Error(e)
        }
    },
    uploadBulkProduct: async (input) => {
        try {
            if (input) {
                let newProduct = await Product.insertMany(input)
                if (newProduct) {
                    console.log(newProduct)
                    return true
                }
                return false
            } else {
                throw new Error("No Input")
            }
        } catch (e) {
            throw new Error(e)
        }
    }
}