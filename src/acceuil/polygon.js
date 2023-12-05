import PropTypes from "prop-types";
import React from "react";
import "./polygon.css";

import vector from "./assets/vector.svg";
import vector1 from "./assets/vector1.svg";
import vector2 from "./assets/vector2.svg";
import vector3 from "./assets/vector3.svg";
import vector4 from "./assets/vector4.svg";

const YourComponent = () => {
    return (
        <Component
            img={vector}
            vector={vector1}
            vector1={vector2}
            vector2={vector3}
            vector3={vector4}
        />
    );
};

export const Component = ({
    img,
    vector,
    vector1,
    vector2,
    vector3,
}) => {
    return (
        <div className="component">
            <img className="vector-5" src={img} alt="vector-5" />
            <img className="vector-6" src={vector} alt="vector-6" />
            <img className="vector-7" src={vector1} alt="vector-7" />
            <img className="vector-8" src={vector2} alt="vector-8" />
            <img className="vector-9" src={vector3} alt="vector-9" />
        </div>
    );
};

Component.propTypes = {
    img: PropTypes.string,
    vector: PropTypes.string,
    vector1: PropTypes.string,
    vector2: PropTypes.string,
    vector3: PropTypes.string,
};

export default YourComponent;
