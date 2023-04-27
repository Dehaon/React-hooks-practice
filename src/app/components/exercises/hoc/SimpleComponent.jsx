import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = (props) => {
    const { onLogin, onLogOut, isAuth } = props;

    return (
        <button
            className="btn btn-primary"
            onClick={isAuth ? onLogOut : onLogin}
        >
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
