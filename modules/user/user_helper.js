
const { SECERETKEY } = require("../../config");
const { User } = require("../../models/User");
const { ObjectId, bcrypt, jwt } = require("../../tools");
const { customError, errorName } = require("../../utils");

module.exports = {

    userRegistration: async (input) => {
        if (input.password && input.confirmPassword) {
            if (input.password !== input.confirmPassword) {
                throw customError(errorName.PASSWORD_NOT_MATCH)
            }
        } else {
            throw customError(errorName.FAILED)
        }
        let isUserIsExisting = await User.findOne({ phone: input.phone })
        if (isUserIsExisting) {
            throw customError(errorName.ALREADY_EXISTED)
        }
        var salt = await bcrypt.genSaltSync(12);
        input.password = await bcrypt.hash(input.password, salt);
        const newUser = new User({
            userName: input.userName,
            phone: input.phone,
            email: input.email,
            password: input.password,
        })
        let savedUser = await newUser.save()
        if (savedUser) {
            const token = await jwt.sign({
                id: savedUser._id,
                phone: savedUser.phone,
                userName: savedUser.userName
            }, SECERETKEY, { expiresIn: '1h' })
            savedUser.token = token
            return savedUser

        } else {
            throw customError(errorName.FAILED)
        }

    }
}