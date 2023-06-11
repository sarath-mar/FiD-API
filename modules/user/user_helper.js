
const { SECERETKEY } = require("../../config");
const { User } = require("../../models/User");
const { ObjectId, bcrypt, jwt } = require("../../tools");
const { customError, errorName } = require("../../utils");

const createToken = async (user) => {
    try {
        const token = await jwt.sign({
            id: user._id,
            phone: user.phone,
            userName: user.userName
        }, SECERETKEY, { expiresIn: '1h' })
        if (!token)
            throw customError(errorName.SOME_ERROR)
        return token
    }
    catch (e) {
        console.log(e);
        throw customError(errorName.FAILED)
    }


}
const userValidation = async (input) => {

    if (input.password && input.confirmPassword) {
        let password = input.password.trim()
        let confirmPassword = input.confirmPassword.trim()
        if (password === '')
            throw customError("EMPTY_PASSWORD_FOUND")
        if (confirmPassword === '')
            throw customError("EMPTY_CONFIRM_PASSWORD_FOUND")
        if (password !== confirmPassword) {
            throw customError(errorName.PASSWORD_NOT_MATCH)
        }
        input.password = password
    } else {
        throw customError("NO_PASSWORD_FOUND")
    }
    if (input.userName) {
        let userName = input.userName.trim()
        if (userName === '')
            throw customError("EMPTY_USERNAME_FOUND")
        input.userName = userName
    } else {
        throw customError("NO_USERNAME_FOUND")
    }
    if (input.phone) {
        let phone = input.phone.trim()
        if (phone === '')
            throw customError("EMPTY_PHONE_FOUND")
        var phoneNoValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        let validPhoneNo = phoneNoValidation.test(phone);
        if (!validPhoneNo)
            throw customError("PHONE_NUMBER_VALIDATION_FAILED")
        input.phone = phone
    } else {
        throw customError("NO_PHONE_FOUND")
    }
    if (input.email) {
        let email = input.email.trim()
        if (email === '')
            throw customError("EMPTY_EMAIL_FOUND")
        var emailNoValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validEmailNo = emailNoValidation.test(String(email).toLowerCase());
        if (!validEmailNo)
            throw customError("EMAIL_VALIDATION_FAILED")
        input.email = email
    } else {
        throw customError("NO_EMAIL_FOUND")
    }

    return input
}

module.exports = {

    userRegistration: async (input) => {

        let user = await userValidation(input)
        if (user) {
            let isUserIsExisting = await User.findOne({ $or: [{ phone: user.phone }, { email: user.email }] })
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
                savedUser.token = await createToken(savedUser)
                return savedUser
            } else {
                throw customError(errorName.FAILED)
            }
        }
        throw customError(errorName.USER_NOT_FOUND)

    },
    userSignIn: async (input) => {
        if (input.emailOrPhone) {
            var isUser = await User.findOne({ $or: [{ email: input.emailOrPhone }, { phone: input.emailOrPhone }] })
            if (!isUser)
                throw customError(errorName.NO_EMAIL_OR_PHONE_FOUND)
        }
        if (input.password && isUser) {
            let validUser = await bcrypt.compare(input.password, isUser.password)
            if (validUser) {
                let token = await createToken(isUser)
                isUser.token = token
                return isUser
            }
            throw customError(errorName.PASSWORD_NOT_MATCH)
        }
    },
    getUsers: async () => {
        let users = await User.find()
        totalCount = await User.countDocuments()
        return {
            data: users,
            totalCount
        }
    }
}