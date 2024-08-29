"use client"
import React, {useEffect, useState} from 'react';
import HeaderBox from "../../components/HeaderBox.jsx";
import CustomTable from "../../components/Table/table.jsx";
import {DatePicker} from "@nextui-org/date-picker";
import {parseDate} from "@internationalized/date";
import {
    Autocomplete, AutocompleteItem,
    Button, Checkbox, CheckboxGroup,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader, Radio, RadioGroup,
    useDisclosure,
} from "@nextui-org/react";
import ImageUpload from "../../utils/imageUpload.jsx";
import dayjs from 'dayjs';
import ProductRegisterFrom from "../../components/productRegisterFrom.jsx";


const products = [
    {
        id: "1",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        status: "Ready for Pickup",
    },
    {
        id: "2",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        status: "Sent for Repair",
    },
    {
        id: "3",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        status: "Received from Repair Center",
    },
    {
        id: "4",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        status: "Received for Warranty",
    },
    {
        id: "5",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        status: "Ready for Pickup",
    },
    {
        id: "6",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        status: "Received for Warranty",
    },
    {
        id: "7",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        status: "Ready for Pickup",
    },
    {
        id: 8,
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        purchaseDate: "2021-01-01",
        status: "Ready for Pickup",
    },
]


const visibleColumns = ["id","name", "purchaseDate","productName", "status"]

const  RegisteredItem = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const popupView = () => {
        onOpen()
    }

    const popup =[
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"2xl"} >
        <ModalContent>
            {(onClose) => (
                <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                    <ModalHeader className="flex flex-col gap-1">Register a Product</ModalHeader>
                    <ModalBody>
                        <ProductRegisterFrom/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                            Add
                        </Button>
                    </ModalFooter>
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