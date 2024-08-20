import express from "express";
import Customer from "../models/customerModel.js";

const router=express.Router();

//add new customer
router.post('/',async (req, res)=>{
    try {

        if (
            !req.body.firstName ||
            !req.body.lastName ||
            !req.body.phone ||
            !req.body.address ||
            !req.body.email ||
            !req.body.password
        ){
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newCustomer= {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            phone:req.body.phone,
            address:req.body.address,
            email:req.body.email,
            password:req.body.password,
        }

        const customer = await Customer.create(newCustomer);

        return res.status(201).send(customer);
    }catch (error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//get all customers
router.get('/',async (req, res)=>{
    try {
        const customers = await Customer.find();

        return res.status(200).json({
            count: customers.length,
            data: customers,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

//get customer by ID
router.get('/:id',async (req, res)=>{
    try {
        const { id } = req.params;

        const customer = await Customer.findById(id);

        return res.status(200).json(customer);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

//update customer
router.put('/:id',async(req, res)=>{
    try {
        if (
            !req.body.firstName ||
            !req.body.lastName ||
            !req.body.phone ||
            !req.body.address ||
            !req.body.email ||
            !req.body.password
        ){
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = req.params;

        const result = await Customer.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        return res.status(200).send({ message: 'Customer updated successfully' });
    }catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

//delete customer
router.delete('/:id',async (req, res)=>{
    try {
        const { id } = req.params;

        const result = await Customer.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        return res.status(200).send({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

export default router;