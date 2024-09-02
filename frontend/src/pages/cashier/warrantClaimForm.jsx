import {
    Autocomplete, AutocompleteItem,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader, Radio, RadioGroup,
    Select,
    SelectItem, Textarea
} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/date-picker";
import React, {useEffect, useState} from "react";
import AutoComplete from "../../components/Autocomplete/autoComplete.jsx";
import {getLocalTimeZone, parseDate} from "@internationalized/date";
import dayjs from "dayjs";


let serviceType=[
    {key:"Warranty",label:"Warranty"},
    {key:"Repair",label:"Repair"},
    {key:"Inspection & Maintenance",label:"Inspection & Maintenance"},
];

const WarrantClaimForm =({isOpen,onOpenChange})=>{
    const [productItems, setProductItems] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({
        productName: "",
        customerName: "",
        phoneNumber: "",
        endDate:""
    });

    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5555/products/'); // Replace with your backend endpoint
                const result = await response.json();

                // Assuming the response structure is as you provided
                const items = result.data.map(item => ({
                    label: item._id.toString(), // Convert _id to string if necessary
                    key: item._id.toString(),
                    textValue: item._id.toString()
                }));

                setProductItems(items);
            } catch (error) {
                console.error("Error fetching product IDs:", error);
            }
        };

        fetchData();
    }, []);


    const handleProductSelect = async (selectedValue) => {
        try {

            const response = await fetch(`http://localhost:5555/products/${selectedValue}`);
            const result = await response.json();


            setSelectedProduct({
                productId: result._id,
                productName: result.productName,
                customerName:result.customerName,
                phoneNumber: result.phoneNumber,
                endDate:result.endDate
            });


        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };


    const formattedDate = selectedProduct?.endDate
        ? dayjs(selectedProduct.endDate).format('YYYY-MM-DD')
        : dayjs().format('YYYY-MM-DD');

    const currentDate=dayjs().format('YYYY-MM-DD')
    const color = formattedDate >= currentDate ? "success" : "danger"

    serviceType = formattedDate < currentDate ? [
        {key:"Repair",label:"Repair"},
        {key:"Inspection & Maintenance",label:"Inspection & Maintenance"},
    ]: [
        {key:"Warranty",label:"Warranty"},
        {key:"Repair",label:"Repair"},
        {key:"Inspection & Maintenance",label:"Inspection & Maintenance"},
    ]
    console.log(selectedProduct.productId)
    const [visualInspection, setVisualInspection] = useState("");
    const [accessories, setAccessories] = useState("");
    const [problem, setProblem] = useState("");
    const [type, setType] = useState(serviceType[0].key); // Default to the first type
    const [costEst, setCostEst] = useState("");
    const [timeEst, setTimeEst] = useState("");
    const [sender, setSender] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newServiceNote = {
            productId: selectedProduct.productId,
            visualInspection:visualInspection,
            accessories:accessories,
            problem:problem,
            type:type,
            costEst:costEst,
            ReceivedLocation: "Kithulampitiya",
            timeEst:timeEst,
            sender:"sender",
        };


        try {
            const response = await fetch('http://localhost:5555/serviceNote/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newServiceNote),
            });

            console.log(newServiceNote)
            if (response.ok) {
                // Handle successful response
                console.log("Service note added successfully");
                onOpenChange(false); // Close the modal
            } else {
                // Handle errors
                console.error("Error adding service note");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return(
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"xl"}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Service Note</ModalHeader>
                        <ModalBody>
                            <div className="flex flex-row gap-4">
                                {/*<AutoComplete label="Product ID" placeholder="select an product ID" items={item} onSelect={(selectedItem) => handleProductSelect(selectedItem.value)} />*/}
                                <Autocomplete
                                    defaultItems={productItems}
                                    label="Product ID"
                                    placeholder="select an product ID"
                                    onSelectionChange={handleProductSelect}
                                >
                                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                </Autocomplete>
                                <Input type="text" label="Product Name" isReadOnly value={selectedProduct.productName}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Input type="text" label="Customer Name" isReadOnly value={selectedProduct.customerName}/>
                                <Input type="text" label="Phone Number" isReadOnly value={selectedProduct.phoneNumber}/>
                            </div>
                            <div className="flex flex-row gap-4">

                                <DatePicker label="Warranty End Date" isReadOnly value={parseDate(formattedDate)} color={color} />
                                <Select
                                    label="Select a Service Type"
                                    className="max-w-xs"
                                >
                                    {serviceType.map((serviceType) => (
                                        <SelectItem key={serviceType.key}>
                                            {serviceType.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                            <Textarea
                                label="Visual Inspection"
                                placeholder="Enter Visual damages and other stuff"
                                onChange={(e) => setVisualInspection(e.target.value)}
                            />
                            <Input type="text" label="Accesories" placeholder="Enter accesories hand over by customer" onChange={(e) => setAccessories(e.target.value)}/>
                            <Textarea
                                label="Problem"
                                placeholder="Enter customer's description about problem"
                                onChange={(e) => setProblem(e.target.value)}
                            />
                            <div className="flex flex-row gap-4">
                                <Input type="text" label="Cost Estimate" placeholder="Enter cost estimate (Rs.)" onChange={(e) => setCostEst(e.target.value)}/>
                                <AutoComplete label="Sender Details" placeholder="select the sender" items={productItems} onChange={(e) => setSender(e.target.value)}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className={"w-1/2"}>
                                    <Input type="text" label="Time Estimate" placeholder="Enter Time estimate" onChange={(e) => setTimeEst(e.target.value)} />
                                </div>

                                <div className={"flex items-center"}>
                                    <RadioGroup
                                    orientation="horizontal"
                                    className={"items-center"}
                                >
                                    <Radio value="days">Days</Radio>
                                    <Radio value="months">Months</Radio>
                                    <Radio value="years">Years</Radio>
                                </RadioGroup>
                                </div>


                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onClick={handleSubmit}>
                            Add
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
        )

}

export default WarrantClaimForm;