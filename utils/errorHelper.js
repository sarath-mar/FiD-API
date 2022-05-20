const errorName={
    NOT_FOUND:"NOT_FOUND",
    FAILED:"FAILED",
    ALREADY_EXISTED:"ALREADY_EXISTED",
    USER_NOT_FOUND:"USER_NOT_FOUND",
    SOME_ERROR:"SOME_ERROR",
    PASSWORD_NOT_MATCH:"PASSWORD_NOT_MATCH",
    TOKEN_EXPIRED:"TOKEN_EXPIRED",
    NO_TOKEN_FOUND:"NO_TOKEN_FOUND" ,
    NO_EMAIL_OR_PHONE_FOUND:"NO_EMAIL_OR_PHONE_FOUND",
    INCORRECT_PASSWORD:"INCORRECT_PASSWORD",
}

const customError=(msg)=>{
    return new Error(msg)
}

module.exports={
     customError,
     errorName
}