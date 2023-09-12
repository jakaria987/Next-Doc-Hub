"use client"
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = () => {
    const [currentColor, setCurrentColor] = useState('#2828C9'); // Default color

    const handleOnChange = (color) => {
        setCurrentColor(color.hex);
    }

    // Calculate the reverse color
    const reverseColor = (color) => {
        const hexColor = color.replace('#', ''); // Remove the '#' symbol
        const red = 255 - parseInt(hexColor.substring(0, 2), 16);
        const green = 255 - parseInt(hexColor.substring(2, 4), 16);
        const blue = 255 - parseInt(hexColor.substring(4, 6), 16);
        return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
    }

    const pageStyle = {
        backgroundColor: currentColor,
        minHeight: '100vh', // Ensure the page takes at least the full viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const h1Style = {
        color: reverseColor(currentColor), // Set only the h1 text color to the reverse color
    };

    return (
        <div style={pageStyle}>
            <h1 className='text-5xl font-bold text-center mb-7 border p-4 border-double' style={h1Style}>Pick Your Color</h1>
            <SketchPicker
                className='mx-auto'
                color={currentColor}
                onChangeComplete={handleOnChange}
            ></SketchPicker>
        </div>
    );
};

export default ColorPicker;
