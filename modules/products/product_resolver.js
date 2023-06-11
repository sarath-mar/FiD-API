const { Aggregate } = require('mongoose')
const { Test } = require('../../models/Test')
const { customError, errorName } = require('../../utils')
const { checkAuth } = require('../../utils/authentification')
const ProductHelper = require('./product_helper')

module.exports.queries = {
    getProducts: async (_, { }, context, info) => {
        
        if (context.id) {
            return ProductHelper.getProducts()
        }

    },
    // getSingleProduct
    getSingleProduct: async (_, { id }, context, info) => {
        console.log("context");
        console.log(context);
        // let auth = await checkAuth(context)
        // if (auth) {
        return ProductHelper.getSingleProduct(id)
        // }
    },

}  
module.exports.mutations = {
    createProduct: async (_, { input }, context, info) => {
        // let auth = await checkAuth(context)
        // if (auth) {
        return ProductHelper.createProduct(input)
        // }
    },
    uploadBulkProduct: async (_, { input }, context, info) => {
        // let auth = await checkAuth(context)
        // if (auth) {()
        console.log("reached")
        return ProductHelper.uploadBulkProduct(input)
        // }
    },
    deleteProduct: async (_, { id }, context, info) => {
        // let auth = await checkAuth(context)
        // if (auth) {()
        console.log("reached", id)
        return ProductHelper.deleteProduct(id)
        // }
    },

}
