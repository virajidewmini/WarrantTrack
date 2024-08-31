import React from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";


const AutoComplete =({label,placeholder,items}) => {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Autocomplete
                label={label}
                placeholder={placeholder}
                className="max-w-xs"
                defaultItems={items}
            >
                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
            </Autocomplete>
        </div>
    );
}

export default AutoComplete;