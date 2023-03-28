import React from 'react';
import Devicedetail from '../Devicedetail/Devicedetail';

const Device = (props) => {
    return (
        <div>
            <h3>I have a device:</h3> 
            <h3>{props.name}</h3>
            <Devicedetail price={props.price}></Devicedetail>
        </div>
    );
};

export default Device;