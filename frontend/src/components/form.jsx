// import {Input} from "@nextui-org/input";
//
// export default function form(){
//     return(
//         <div>
//             <Input type="email" variant={bordered} label="Email" />
//         </div>
//     )
// }

import React from "react";
import {Input} from "@nextui-org/react";

export default function Form() {
    const variants = ["flat", "bordered", "underlined", "faded"];

    return (
        <div className="w-full flex flex-col gap-4">

                <div  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input type="email" variant={"bordered"} label="Email" />
                   
                </div>

        </div>
    );
}
