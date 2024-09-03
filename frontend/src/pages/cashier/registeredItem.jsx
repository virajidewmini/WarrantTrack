"use client"
import React, {useEffect, useState} from 'react';
import HeaderBox from "../../components/HeaderBox.jsx";
import CustomTable from "../../components/Table/table.jsx";
import { showToast } from '../../utils/toast';
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";

import ProductRegisterFrom from "../../components/productRegisterFrom.jsx";
import ProductView from "../../components/Table/ProductView.jsx";

const visibleColumns = ["id","name", "purchaseDate","productName"]

const  RegisteredItem = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isRowClicked, setIsRowClicked] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5555/products/');
            const result = await response.json();
            console.log(result.data);

            if (result.data) {
                const productList = result.data
                productList.forEach(item => {
                    item.id = item._id.toString();
                    item.name = item.customerName;
                    item.contactNumber = item.phoneNumber.toString();
                })
                setProducts(productList);

            } else {
                console.error("Unexpected response format:", result);
            }

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    useEffect(() => {
        fetchData();
        if(products.length > -1){
            setLoading(false);
        }
    }, []);
    
    const registerItem = async (data,onClose) =>{
        console.log(data)
        try{
            const response = await fetch(`http://localhost:5555/products/create`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            console.log(response)
            const result = await response.json();
            console.log(result)
            if(response.status === 201){
                console.log("Successfully registered");
                showToast('success', 'Product Added');
            }else{
                console.error("Error registered");
                showToast('error','Product Adding failed');
            }

        }catch(error){
            console.error("Error creating products:", error);
        }
        onClose()
    }

    const popupView = (rowData=null) => {
        if(rowData){
            setIsRowClicked(true);
            setSelectedRowData(rowData)
        }else {
            setIsRowClicked(false);
        }
        onOpen()
    }

    const popup =[

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={setIsRowClicked?"md":"2xl"} >
            <ModalContent>
                {(onClose) => (
                    <div style={{ maxHeight: '680px', overflowY: 'auto' }}>
                        {isRowClicked ? (<ProductView data={selectedRowData}/>):(<ProductRegisterFrom registerItem = {registerItem} onClose={onClose}/>)}
                    </div>
                )}
            </ModalContent>
        </Modal>
    ]


    return(
        <div>
            {popup}

            <div>
                <HeaderBox title={"Registered Items"}></HeaderBox>
            </div>
            <div className={"mt-8"}>

                    <CustomTable
                        isLoading={loading}
                    users={products}
                INITIAL_VISIBLE_COLUMNS={visibleColumns}
                popupView={popupView}
            />

            </div>

        </div>
    )
}

export default RegisteredItem;