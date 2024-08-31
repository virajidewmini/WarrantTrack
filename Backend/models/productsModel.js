import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    customerName:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type:String,
        required:true
    },
    perchesDate:{
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