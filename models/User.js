const { Schema, Model, ObjectId } = require("../tools");

const schemaOptions = {
    timestamps: true,
};

const UserSchema = new Schema({
    userName: String,
    password: String,
    email: String,
    phone:String,
},
    schemaOptions)
module.exports.User = Model("User", UserSchema)