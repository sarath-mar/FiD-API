const { Quotation } = require("../../models/Quotation")

module.exports = {
    getAllQuotation: async (input) => {
        try {

            let quotations = await Quotation.find()
                .populate("products.product")
            let count = await Quotation.countDocuments()
            // console.log(quotations[0].products);
            let result = {
                data: quotations,
                totalCount: count
            }
            return result

        }
        catch (e) {
            throw new Error(e)
        }
    },
    createQuotation: async (input) => {
        try {
            console.log(input)
            if (input) {
                let newQuotation = await Quotation.create(input)
            //    await Quotation.deleteOne({_id:"6475df7f66894b15d2712177"})
                if (newQuotation) {
                    console.log(newQuotation)
                    return newQuotation
                }
            } else {
                throw new Error("No Input")
            }

        }
        catch (e) {
            throw new Error(e)
        }
    },
}