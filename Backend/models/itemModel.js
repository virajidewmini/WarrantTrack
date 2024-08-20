import mongoose from "mongoose";
import Customer from "./customerModel.js"
import Retailer from "./retailerModel.js"

const itemSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        serialNumber:{
            type:String,
            required:true
        },
        purchaseDate:{
            type:Date,
            required:true
        },
        invoice:{
            data:Buffer,
            contentType:String,
            required:true
        },
        customer:{
            type: mongoose.Schema.Types.ObjectId,
            ref:Customer,
            required:true
        },
        retailer:{
            type: mongoose.Schema.Types.ObjectId,
            ref:Retailer,
            required:true
        },
        warrantyPeriod:{
            type:String,
            required:true
        }
    }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;