const { Aggregate } = require('mongoose')
const { Test } = require('../../models/Test')
const { customError, errorName } = require('../../utils')
const { checkAuth } = require('../../utils/authentification')
const ProductHelper = require('./product_helper')

module.exports.queries = {
    getProducts: async () => ProductHelper.getProducts(),
  
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
    
}
