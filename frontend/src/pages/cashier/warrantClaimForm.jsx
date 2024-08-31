import {
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
import React from "react";
import AutoComplete from "../../components/Autocomplete/autoComplete.jsx";

const item = [
    {label: "1", value: "1"},
    {label: "2", value: "2"},
    {label: "3", value: "3"},
    {label: "4", value: "4"},
];

const serviceType=[
    {key:"Warranty",label:"Warranty"},
    {key:"Repair",label:"Repair"},
    {key:"Inspection & Maintenance",label:"Inspection & Maintenance"},
];

const WarrantClaimForm =({isOpen,onOpenChange})=>{
    return(
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"xl"}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Service Note</ModalHeader>
                        <ModalBody>
                            <div className="flex flex-row gap-4">
                                <AutoComplete label="Product ID" placeholder="select an product ID" items={item}/>
                                <Input type="text" label="Product Name" isReadOnly defaultValue="MacBook M1 Air"/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Input type="text" label="Customer Name" isReadOnly defaultValue="Sajith Bandara"/>
                                <Input type="text" label="Phone Number" isReadOnly defaultValue="0772679930"/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <DatePicker label="Warranty End Date"/>
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
                            />
                            <Input type="text" label="Accesories" placeholder="Enter accesories hand over by customer"/>
                            <Textarea
                                label="Problem"
                                placeholder="Enter customer's description about problem"
                            />
                            <div className="flex flex-row gap-4">
                                <Input type="text" label="Cost Estimate" placeholder="Enter cost estimate (Rs.)"/>
                                <AutoComplete label="Sender Details" placeholder="select the sender" items={item}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className={"w-1/2"}>
                                    <Input type="text" label="Time Estimate" placeholder="Enter Time estimate" />
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
                            <Button color="primary" onPress={onClose}>
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