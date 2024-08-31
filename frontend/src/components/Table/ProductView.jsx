import React from 'react';
import {Image} from "@nextui-org/image";

const ProductView = ({data}) => {
    return (
        <div >
            <div>
                <p className={"text-xl font-bold mb-4"}>{data.productName}-{data.retailerName}</p>
            </div>
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
    );
};

export default ProductView;