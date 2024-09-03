import React from 'react';
import {Image} from "@nextui-org/image";
import {
    ModalBody,
    ModalHeader,
} from "@nextui-org/react";

const ProductView = ({data}) => {
    return (
        <div style={{maxHeight: '680px', overflowY: 'auto'}}>
            <ModalHeader className="flex flex-col gap-1">
                {data.productName}-{data.retailerName}
            </ModalHeader>
            <ModalBody>
                <div className={"mt-0"}>
                    <div className={"w-full h-full"}>
                        <Image src={data.imageUrl} alt="Product Image" className={"w-full"} width="full"/>
                    </div>
                    <div className={"flex gap-2 items-start mt-4 mb-4"}>
                        <div className={"flex flex-col justify-self-start font-bold "}>
                            <p>Customer Name</p>
                            <p>Phone Number</p>
                            <p>Serial Number</p>
                            <p>Perches Date</p>
                            <p>Warranty Period</p>
                            <p>Warranty End Date</p>
                        </div>
                        <div className={"flex flex-col justify-self-start font-bold text-gray-600"}>
                            <p>: {data.name}</p>
                            <p>: {data.contactNumber}</p>
                            <p>: {data.serialNumber}</p>
                            <p>: {data.purchaseDate}</p>
                            <p>: {data.warrantyPeriod}</p>
                            <p className={"text-red-400"}>: {data.endDate}</p>
                        </div>

                    </div>

                </div>

            </ModalBody>
        </div>

    )

};

export default ProductView;