const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

mongoose.connect();

const userSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default:[]
    },
    orders: {
        type: Array,
        default:[]
    },
    picture: String,
    contact: Number,
    isAdmin: Boolean
}, {timeStamp: true})

const User = mongoose.model("User", userSchema)
export { User }