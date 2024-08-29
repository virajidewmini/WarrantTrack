import mongoose from "mongoose";

const serviceNoteSchema= new mongoose.Schema(
    {
        serviceNoteId: {
            type: Number,
            required: true,
            unique: true,
        },

        customerName:{
            type: String,
            required:true
        },
        customerPhone:{
            type: String,
            required:true
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
        status:{
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