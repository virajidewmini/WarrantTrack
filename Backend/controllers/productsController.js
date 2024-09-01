import Product from '../models/productsModel.js';
import { addDays, addMonths, addYears, parseISO } from 'date-fns';
import Customer from "../models/customerModel.js";


export const addProduct = async (req, res) => {
    try{
        const { serialNumber, warrantyPeriod, purchaseDate } = req.body;

        if (
            !req.body.customerName ||
            !req.body.phoneNumber ||
            !req.body.retailerName ||
            !req.body.productName ||
            !req.body.purchaseDate ||
            !req.body.serialNumber ||
            !req.body.warrantyPeriod ||
            !req.body.imageUrl
         ){
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        let seralNum = await Product.findOne({serialNumber:req.body.serialNumber} );

        if(seralNum){
            return res.status(400).send({error: "Serial already exists"});
        }

        let endDate = req.body.purchaseDate;
        const [amount, unit] = req.body.warrantyPeriod.split(' ')
        const numberAmount = parseInt(amount)

        if(isNaN(numberAmount)){
            return res.status(400).send({error: "Invalid warranty period format"});
        }

        switch (unit.toLowerCase()){
            case 'days':
                endDate = addDays(endDate, numberAmount);
                break;
            case 'months':
                endDate = addMonths(endDate, numberAmount);
                break;
            case 'years':
                endDate = addYears(endDate, numberAmount);
                break;
            default:
                return res.status(400).send({error: "Invalid warranty period unit"});
        }

        const newProduct = {
            customerName: req.body.customerName,
            phoneNumber: req.body.phoneNumber,
            retailerName: req.body.retailerName,
            productName: req.body.productName,
            purchaseDate: req.body.purchaseDate,
            serialNumber: req.body.serialNumber,
            warrantyPeriod: req.body.warrantyPeriod,
            imageUrl: req.body.imageUrl,
            endDate: endDate.toISOString(),
        }

        const product = await Product.create(newProduct);

        if(product){
            return res.status(201).send(product);
        }else {
            return res.status(400).send({error: "Product not created."});
        }

    }catch(error){
        res.status(500).send({ message: error.message });
    }
}

export const getProducts = async (req, res)=>{
    try {
        const productIds = await Product.find();

        return res.status(200).json({
            count: productIds.length,
            data: productIds,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const getProduct= async (req, res)=>{
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        return res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}