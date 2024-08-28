import express from "express";

import { addCustomer, getCustomers, getCustomer, updateCustomer, deleteCustomer } from '../controllers/customerController.js';

const router=express.Router();

//add new customer
router.post('/',addCustomer)

//get all customers
router.get('/',getCustomers)

//get customer by ID
router.get('/:id',getCustomer)

//update customer
router.put('/:id',updateCustomer)

//delete customer
router.delete('/:id',deleteCustomer)

export default router;