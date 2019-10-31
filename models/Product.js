const mongoose = require("mongoose");
const Schema, { ObjectId } = mongoose.Schema;
const collectionName = "products";

const data = {
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    quantity: {
        type: Number
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    shipping: {
        required: false,
        type: Boolean
    }
}

const productSchema = new Schema(data, { timestamps: true });

module.exports = mongoose.model("Product", productSchema, collectionName);
