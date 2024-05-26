const { timeLog } = require("console")
const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount:{
        type:Number,
        default: 0
    },
    bgcolor: String,
    panelColor: String,
    textColor: String
}, {timeStamp: true})

const Product = mongoose.model("Product", productSchema)

export { Product }