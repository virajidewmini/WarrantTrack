import React from 'react';
import HeaderBox from "../../components/HeaderBox.jsx";
import CustomTable from "../../components/Table/table.jsx";


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
    return(
        <div>
            <div>
                <HeaderBox title={"Registered Items"}></HeaderBox>
            </div>
            <div className={"mt-8"}>
                <CustomTable users = {products} INITIAL_VISIBLE_COLUMNS={visibleColumns}></CustomTable>
            </div>


        </div>
    )
}

export default RegisteredItem;