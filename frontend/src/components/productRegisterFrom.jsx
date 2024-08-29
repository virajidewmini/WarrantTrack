import React, {useState} from 'react';
import {Autocomplete, AutocompleteItem, Input, Radio, RadioGroup} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/date-picker";
import ImageUpload from "../utils/imageUpload.jsx";


const retailarName = [
    {label: "Apple", value: "Apple"},
    {label: "Samsung", value: "Samsung"},
    {label: "Hp", value: "Hp"},
    {label: "Asus", value: "Asus"},
]
const ProductRegisterFrom = () => {
    const [purchaseDate, setPurchaseDate] = useState(null);
    const [warrantyPeriod, setWarrantyPeriod] = useState('');
    const [warrantyUnit, setWarrantyUnit] = useState('');
    return (
        <div className={"flex flex-col gap-4"}>
            <div className="flex flex-row gap-4">
                <Input type="text" label="Customer Name" placeholder="Enter customer name"/>
                <Input type="text" label="Phone Number" placeholder="Enter phone number"/>
            </div>
            <div className="flex flex-row gap-4">
                <Autocomplete
                    label="Retailar name"
                    placeholder="Search a name"
                    className="max-w-xs"
                    defaultItems={retailarName}
                >
                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                </Autocomplete>
                <DatePicker
                    label="Purches Date"
                    // value={getDateObject(purchaseDate)}
                    onChange={(e) => {
                        setPurchaseDate(e)
                    }}
                />
            </div>
            <Input type="text" label="Product Name" placeholder="Enter product name"/>
            <Input type="text" label="Serial Numnber" placeholder="Enter serial numnber"/>

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
    );
};

export default ProductRegisterFrom;