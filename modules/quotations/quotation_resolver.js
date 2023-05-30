
const { customError, errorName } = require('../../utils')
const { checkAuth } = require('../../utils/authentification')
const quotationHelper = require('./quotation_helper')

module.exports.queries = {
    getAllQuotation: async (_, { }, context, info) => {
        return quotationHelper.getAllQuotation()
    },
}
module.exports.mutations = {
    createQuotation: async (_, { input }, context, info) => {
        // let auth = await checkAuth(context)
        // if (auth) {
        return quotationHelper.createQuotation(input)
        // }
    },


}
