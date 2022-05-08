const { SECERETKEY } = require("../config")
const { jwt } = require("../tools")
const { customError, errorName } = require("./errorHelper")

module.exports = {
    checkAuth: async(context) => {
        const authHeader = context.headers.authorization
        if (!authHeader)
            throw customError(errorName.FAILED)
        const token = authHeader.split('Bearer ')[1]
        if (token) {
            try {
                const user = await jwt.verify(token, SECERETKEY)
                return user

            } catch (e) {
                console.log(e)
                throw customError(errorName.SOME_ERROR)
            }
        } else {
            throw customError("NO_TOKEN_FOUND")
        }

    }
}