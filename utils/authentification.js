// const { SECERETKEY } = require("../config")
const { jwt } = require("../tools")
const { customError, errorName } = require("./errorHelper")
const SECERETKEY="Fid@test" || process.env.SECERETKEY
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
                // console.log(e)
                throw customError(errorName.TOKEN_EXPIRED)
            }
        } else {
            throw customError(errorName.NO_TOKEN_FOUND)
        }

    }
}