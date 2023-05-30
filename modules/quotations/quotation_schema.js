module.exports = {
    types: `
            type quotation{
                _id:ID!
                products:[quotationProduct]
                createdAt:String
                to:quotationTo
              
            }
            type quotationList{
                data:[quotation],
                totalCount:Int
            }
            type quotationTo{
                name:String
                address:String
            }
           
           
            type quotationProduct{
                product: product
                quantity: Int
            }
            input quotationProductInput{
                product: ID!
                quantity: Int
            }
            input quotationToInput{
                name:String
                address:String
            }
            input quotationInput{
                to:quotationToInput
                products:[quotationProductInput]
            }

`,
    queries: `
            getAllQuotation:quotationList
`,
    mutations: `
            createQuotation(input:quotationInput):quotation
`}