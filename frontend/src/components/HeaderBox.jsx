import React from 'react';

const HeaderBox = ({ type = "title", title, user = "Guest" }) => {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-semibold text-primaryText">
                {title}
            </h1>
        </div>
    );
};

export default HeaderBox;
