import React from 'react';
import TestCard from "../components/testCard.jsx";

const About = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="mt-2 text-lg">
                Welcome to the About page! This page provides information about our company.
            </p>
            <TestCard/>
        </div>
    );
};

export default About;
