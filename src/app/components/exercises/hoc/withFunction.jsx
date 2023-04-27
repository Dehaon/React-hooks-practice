import React from "react";
import Card from "../../../components/common/Card";

const wihtFunctions = (Component) => () => {
    const isAuth = localStorage.getItem("auth") === "token";
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <Card>
            <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} />
        </Card>
    );
};

export default wihtFunctions;
