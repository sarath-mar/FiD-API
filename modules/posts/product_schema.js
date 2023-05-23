module.exports = {
    types: `
            type product{
                _id:ID!
                code:String
                description:String
                unit:String
                price:Float
                sellerName:String
                sellerId:String
                createdAt:String
            }
            type productList{
                data:[product],
                totalCount:Int
            }
            input productInput{
                code:String
                description:String
                unit:String
                price:Float
                sellerName:String
                sellerId:String
            }

`,
    queries: `
            getProducts:productList
`,
    mutations: `
            createProduct(input:productInput):product
            uploadBulkProduct(input:[productInput]):Boolean
`}