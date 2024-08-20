import express from "express";
import mongoose from "mongoose";
import {PORT, mongoDBURL} from "./config.js";
import customerRoutes from "./routes/customerRoutes.js";


const app=express();

app.use(express.json());

app.get('/',(req, res)=>{
    console.log(req);
    return res.status(234).send("Welcome to MERN project");
})

app.use('/customer', customerRoutes);

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
