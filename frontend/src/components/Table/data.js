import React from "react";
const columns = [
    {name: "PRODUCT ID", uid: "id", sortable: true},
    {name: "CUSTOMER NAME", uid: "name", sortable: true},
    {name: "PRODUCT NAME", uid: "productName", sortable: true},
    {name: "PURCHASE DATE", uid: "purchaseDate", sortable: true},
    {name: "STATUS", uid: "status", sortable: true},
];

const statusOptions = [
    {name: "Received for Warranty", uid: "Received for Warranty"},
    {name: "Sent for Repair", uid: "Sent for Repair"},
    {name: "Received from Repair Center", uid: "Received from Repair Center"},
    {name: "Ready for Pickup", uid: "Ready for Pickup"},
];

export {columns, statusOptions};
