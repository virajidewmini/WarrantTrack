import express from "express";
import mongoose from "mongoose";
import {PORT, mongoDBURL} from "./config.js";
import Customer from "./models/customerModel.js";

const app=express();

app.use(express.json());

app.get('/',(req, res)=>{
    console.log(req);
    return res.status(234).send("Welcome to MERN project");
})

app.post('/customer',async (req, res)=>{
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

app.get('/customer',async (req, res)=>{
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
app.listen(PORT,()=>{
    console.log(`App start port: ${PORT}`);
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connect to database')
    })
    .catch((error)=>{
        console.log(error);
    })
