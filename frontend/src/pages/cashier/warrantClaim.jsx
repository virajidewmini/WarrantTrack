import React from 'react';
import HeaderBox from "../../components/HeaderBox.jsx";
import CustomTable from "../../components/Table/table.jsx";

import {
    useDisclosure,
} from "@nextui-org/react";
import WarrantClaimForm from "./warrantClaimForm.jsx";


const serviceNote = [
    {
        id: "1",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        serviceType: 'Repair',
        status: "Ready for Pickup",
    },
    {
        id: "2",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        serviceType: 'Repair',
        status: "Sent for Repair",
    },
    {
        id: "3",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        serviceType: 'Repair',
        status: "Received from Repair Center",
    },
    {
        id: "4",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        serviceType: 'Repair',
        status: "Received for Warranty",
    },
    {
        id: "5",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        serviceType: 'Repair',
        status: "Ready for Pickup",
    },
    {
        id: "6",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        serviceType: 'Repair',
        status: "Received for Warranty",
    },
    {
        id: "7",
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        serviceType: 'Repair',
        status: "Ready for Pickup",
    },
    {
        id: 8,
        name: "Tony Reichert",
        contactNumber: "+94 725896452",
        productName: "macbook M2",
        serialNumber: "52552589344",
        serviceType: 'Repair',
        status: "Ready for Pickup",
    },
]

const visibleColumns = ["id","name","phone","productName","serviceType" ,"status","actions"]

const  WarrantClaim = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const popupView = () => {
        onOpen()
    }

    const popup =[
        <WarrantClaimForm isOpen={isOpen} onOpenChange={onOpenChange}/>
    ]

    return(
        <div>
            {popup}
            <div>
                <HeaderBox title={"Warrant Claim & Aftercare Item"}></HeaderBox>
            </div>
            <div className={"mt-8"}>
                <CustomTable users = {serviceNote} INITIAL_VISIBLE_COLUMNS={visibleColumns} popupView={popupView}></CustomTable>
            </div>


        </div>
    )
}

export default WarrantClaim;