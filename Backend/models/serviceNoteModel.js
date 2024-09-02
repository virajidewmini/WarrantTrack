import mongoose from "mongoose";
import Product from "./itemModel.js";

import {  customAlphabet  } from 'nanoid';

const numericNanoid = customAlphabet('0123456789', 5);

const serviceNoteSchema= new mongoose.Schema(
    {
        _id: {
            type: Number,
            default: () => numericNanoid(), // Generate an 8-character unique ID
        },
        productId:{
            type: String,
            required: true
        },
        visualInspection:{
            type: String,
            required:true
        },
        accessories:{
            type: String,
            required:true
        },
        problem:{
            type: String,
            required:true
        },
        type: {
            type: String,
            enum: ['Warranty', 'Repair', 'Inspection & Maintenance'],
            required:true
        },
        costEst:{
            type: String,
            required:true
        },
        timeEst:{
            type: String,
            required:true
        },
        ReceivedLocation:{
            type: String,
            required:true
        },
        sender:{
            type: String,
            required:true
        },
    },
    {
        timestamps: true
    }
);

const ServiceNote = mongoose.model("ServiceNote", serviceNoteSchema);

export default ServiceNote;