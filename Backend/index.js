import express from "express";
import mongoose from "mongoose";
import {PORT, mongoDBURL} from "./config.js";
import customerRoutes from "./routes/customerRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import serviceNoteRoutes from "./routes/serviceNoteRoute.js";
import productRoutes from "./routes/productRoutes.js";

const app=express();

app.use(express.json());

app.get('/',(req, res)=>{
    console.log(req);
    return res.status(234).send("Welcome to MERN project");
})

app.use('/customer', customerRoutes);
app.use('/products', productRoutes);
app.use('/user', userRoutes);
app.use('/serviceNote', serviceNoteRoutes);
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
