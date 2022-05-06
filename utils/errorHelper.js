const errorName={
    NOT_FOUND:"NOT_FOUND",
    FAILED:"FAILED",
    ALREADY_EXISTED:"ALREADY_EXISTED",
    USER_NOT_FOUND:"USER_NOT_FOUND",
    SOME_ERROR:"SOME_ERROR",
}

const customError=(msg)=>{
    return new Error(msg)
}

module.exports={
     customError,
     errorName
}