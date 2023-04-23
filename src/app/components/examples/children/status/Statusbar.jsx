import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import StatusItem from "./StatusItem";

const Statusbar = ({ children, value, onChange }) => {
    const countChildren = React.Children.count(children);
    if (!countChildren) {
        return <div>Нет элементов</div>;
    }
    return (
        <div>
            <div className="wrapper">
                <ul className="step-progress">
                    {React.Children.map(children, (child) => {
                        if (child.type === StatusItem) {
                            return React.cloneElement(child, {
                                isDone: child.props.value <= value,
                                onClick: onChange
                            });
                        }
                        return null;
                    })}
                </ul>
            </div>
        </div>
    );
};
Statusbar.propTypes = {
    children: PropTypes.array,
    value: PropTypes.number,
    onChange: PropTypes.func
};

export default Statusbar;
