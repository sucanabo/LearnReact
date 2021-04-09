import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useRandomColor from '../../hook/useRandomColor';
import './style.scss';
function ColorPub() {
    const [color] = useRandomColor();
    return (
        <div className="color-pub" style={{backgroundColor:color}}>
        </div>
    );
}
export default ColorPub;