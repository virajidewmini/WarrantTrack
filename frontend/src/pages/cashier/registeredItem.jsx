"use client"
import React, {useState} from 'react';
import HeaderBox from "../../components/HeaderBox.jsx";
import CustomTable from "../../components/Table/table.jsx";
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


const products = [
    {
        id: "1",
        name: "Tony ",
        contactNumber: "+94 725896452",
        productName: "Macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        imageUrl: "https://th.bing.com/th/id/OIP.J_C_ltP-XLSCClCRTcEdoAAAAA?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        retailerName:"Apple",
        warrantyPeriod:"10 days",
        endDate: "2021-01-01",
    },
    {
        id: "2",
        name: "Reichert",
        contactNumber: "+94 725896452",
        productName: "Macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        imageUrl: "https://th.bing.com/th/id/OIP.J_C_ltP-XLSCClCRTcEdoAAAAA?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        retailerName:"Apple",
        warrantyPeriod:"10 days",
        endDate: "2021-01-01",

    },
    {
        id: "3",
        name: "Tony kumara",
        contactNumber: "+94 725896452",
        productName: "Macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        imageUrl: "https://th.bing.com/th/id/OIP.J_C_ltP-XLSCClCRTcEdoAAAAA?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        retailerName:"Apple",
        warrantyPeriod:"10 days",
        endDate: "2021-01-01",
    },
    {
        id: "4",
        name: "saman Reichert",
        contactNumber: "+94 725896452",
        productName: "Macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        imageUrl: "https://th.bing.com/th/id/OIP.J_C_ltP-XLSCClCRTcEdoAAAAA?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        retailerName:"Apple",
        warrantyPeriod:"10 days",
        endDate: "2021-01-01",
    },
    {
        id: "5",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "Macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        imageUrl: "https://th.bing.com/th/id/OIP.J_C_ltP-XLSCClCRTcEdoAAAAA?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        retailerName:"Apple",
        warrantyPeriod:"10 days",
        endDate: "2021-01-01",
    },
    {
        id: "6",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "Macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        imageUrl: "https://th.bing.com/th/id/OIP.J_C_ltP-XLSCClCRTcEdoAAAAA?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        retailerName:"Apple",
        warrantyPeriod:"10 days",
        endDate: "2021-01-01",
    },
    {
        id: "7",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "Macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        imageUrl: "https://th.bing.com/th/id/OIP.J_C_ltP-XLSCClCRTcEdoAAAAA?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        retailerName:"Apple",
        warrantyPeriod:"10 days",
        endDate: "2021-01-01",
    },
    {
        id: 8,
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "Macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        imageUrl: "https://th.bing.com/th/id/OIP.J_C_ltP-XLSCClCRTcEdoAAAAA?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
]


const visibleColumns = ["id","name", "purchaseDate","productName"]

const  RegisteredItem = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isRowClicked, setIsRowClicked] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);

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
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={isRowClicked ? "md":"2xl"} >
        <ModalContent>
            {(onClose) => (
                <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                    <ModalHeader className="flex flex-col gap-1">
                        {isRowClicked ? "":"Register a Product"}
                    </ModalHeader>
                    <ModalBody>
                        {isRowClicked ? (<ProductView data={selectedRowData}/>):(<ProductRegisterFrom/>)}
                    </ModalBody>
                    {!isRowClicked && (
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Add
                            </Button>
                        </ModalFooter>
                    )}

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
                <CustomTable users = {products} INITIAL_VISIBLE_COLUMNS={visibleColumns} popupView={popupView}></CustomTable>
            </div>


        </div>
    )
}

export default RegisteredItem;