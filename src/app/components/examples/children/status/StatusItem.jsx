import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const StatusItem = ({ children, isDone, value, onClick }) => {
    const className = `step-progress-item ${isDone ? "is-done" : "current"}`;
    const handleClick = () => {
        onClick && onClick(value);
    };
    return (
        <div className={className} onClick={handleClick}>
            <strong>{children}</strong>
        </div>
    );
};

StatusItem.propTypes = {
    children: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func
};

export default StatusItem;
