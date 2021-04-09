import React, { useEffect, useState } from 'react';

function changeColor(){
    const colorArray = ['red','green','blue','yellow','black'];
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
}
function useRandomColor(props) {
    const [color, setColor] = useState('transparent');

    useEffect(() => {
        const colorIntervel = setInterval(() => {
            const newColor = changeColor();
            setColor(newColor);
        }, 1000);
        return () => {
            clearInterval(colorIntervel);
        };
    }, []);
    return [color]
}

export default useRandomColor;