import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './style.scss';
ColorBox.propTypes = {

};
function getRandomColor() {
    let colorList = ['red', 'blue', 'green', 'gray', 'purple'];
    return colorList[Math.floor(Math.random() * colorList.length)];
}
function ColorBox(props) {
    const [color, setColor] = useState('black');
    const handleBoxClick = function () {
        let newColor = getRandomColor();
        setColor(newColor);
    }
    return (
        <div className="container">
            <div className="color-box"
                style={{ backgroundColor: color }}
                onClick={handleBoxClick}
            ></div>

        </div>
    );
}

export default ColorBox;