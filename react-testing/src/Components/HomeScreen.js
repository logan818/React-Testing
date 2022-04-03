/** This is a component that will change based on a button click from Button.js */

import React from "react";
import 'cirrus-ui';

const HomeScreen = (props) => {
    return (
        <div className="HomeScreen">
            <h1> {props.text} </h1>
        </div>
    );
}

export {HomeScreen};