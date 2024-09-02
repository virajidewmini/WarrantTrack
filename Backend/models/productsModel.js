import mongoose from 'mongoose'
import {  customAlphabet  } from 'nanoid';

const numericNanoid = customAlphabet('0123456789', 5);

const productSchema = new mongoose.Schema({
    _id: {
        type: Number,
        default: () => numericNanoid(), // Generate an 8-character unique ID
    },
    customerName:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type:String,
        required:true
    },
    purchaseDate:{
        type:String,
        required:true
    },
    retailerName:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    serialNumber:{
        type:String,
        required:true
    },
    warrantyPeriod:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }

})

const product = mongoose.model("Product", productSchema);
export default product;