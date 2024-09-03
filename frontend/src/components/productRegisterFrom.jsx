import React, {useState} from 'react';
import {
    Autocomplete,
    AutocompleteItem, Button,
    Input, Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    Radio,
    RadioGroup, useDisclosure
} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/date-picker";
import ImageUpload from "../utils/imageUpload.jsx";
import ProductView from "./Table/ProductView.jsx";


const retailarName = [
    {label: "Apple", value: "Apple"},
    {label: "Samsung", value: "Samsung"},
    {label: "Hp", value: "Hp"},
    {label: "Asus", value: "Asus"},
]
const imageUrl = "https://th.bing.com/th/id/R.6b15cb62f81c9741551fa2b989b5fbe3?rik=2%2f2b1blcGKzsZA&pid=ImgRaw&r=0"

const ProductRegisterFrom = ({registerItem, onClose}) => {
    const [purchaseDate, setPurchaseDate] = useState(null);
    const [warrantyPeriod, setWarrantyPeriod] = useState('');
    const [warrantyUnit, setWarrantyUnit] = useState('');
    const [productName, setProductName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [retailerName, setRetailerName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');

    function formatDate(dateObj) {
        const { year, month, day } = dateObj;
        const formattedMonth = month.toString().padStart(2, '0'); // Ensure month is two digits
        const formattedDay = day.toString().padStart(2, '0');     // Ensure day is two digits

        return `${year}-${formattedMonth}-${formattedDay}`;
    }

    const handleRegister = () => {
        const warranty = warrantyPeriod+" "+warrantyUnit;
        const result = {
            customerName:customerName,
            phoneNumber:phoneNumber,
            retailerName:retailerName,
            productName:productName,
            purchaseDate:formatDate(purchaseDate),
            serialNumber: serialNumber,
            warrantyPeriod:warranty,
            imageUrl:imageUrl
        }
        registerItem(result,onClose)

    };
    return (

        <div style={{ maxHeight: '680px', overflowY: 'auto' }}>
            <ModalHeader className="flex flex-col gap-1">
                "Register a Product"
            </ModalHeader>
            <ModalBody>
                <div className={"flex flex-col gap-4"}>
                    <div className="flex flex-row gap-4">
                        <Input type="text" label="Customer Name" placeholder="Enter customer name" onChange={e => setCustomerName(e.target.value)} />
                        <Input type="text" label="Phone Number" placeholder="Enter phone number" onChange={e => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="flex flex-row gap-4">
                        <Autocomplete
                            label="Retailar name"
                            placeholder="Search a name"
                            className="max-w-xs"
                            defaultItems={retailarName}
                            onSelectionChange={(key) => {setRetailerName(key)}}
                        >
                            {retailarName.map((item) => (<AutocompleteItem key={item.value} value={item.value}>{item.label}</AutocompleteItem>))}
                        </Autocomplete>
                        <DatePicker
                            label="Purches Date"
                            onChange={(e) => {
                                setPurchaseDate(e)
                            }}
                        />
                    </div>
                    <Input type="text" label="Product Name" placeholder="Enter product name"
                           onChange={event => setProductName(event.target.value)}/>
                    <Input type="text" label="Serial Numnber" placeholder="Enter serial numnber"
                           onChange={event => setSerialNumber(event.target.value)}/>

                    <RadioGroup
                        defaultValue="buenos-aires"
                        onChange={(event) => {
                            setWarrantyUnit(event.target.value)
                        }}
                    >

                        <div className={"grid grid-cols-4 gap-4"}>
                            <Input type="text" label="Warranty Period" onChange={(e) => {
                                setWarrantyPeriod(e.target.value)
                            }} placeholder=" "/>
                            <div className={"flex gap-4"}>
                                <Radio value="days">Days</Radio>
                                <Radio value="months">Months</Radio>
                                <Radio value="years">Years</Radio>
                            </div>
                        </div>

                    </RadioGroup>

                    <h2 className={"text-gray-600 font-bold"}>Invoice image</h2>
                    <ImageUpload></ImageUpload>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                    Close
                </Button>
                <Button color="primary" onPress={handleRegister}>
                    Add
                </Button>
            </ModalFooter>
        </div>

    );
};

export default ProductRegisterFrom;