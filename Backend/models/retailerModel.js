import mongoose from "mongoose";
import Customer from "./customerModel.js";

const retailerSchema= new mongoose.Schema(
    {
        storeName:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        repairCenter:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
);

const Retailer = mongoose.model("Retailer", retailerSchema);

export default Retailer;
