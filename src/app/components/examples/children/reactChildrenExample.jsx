import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";
import Statusbar from "./status/Statusbar";
import StatusItem from "./status/StatusItem";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    useEffect(() => {
        console.log(data);
    }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ""
        };

        return React.cloneElement(child, config);
    });
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

// example 2
const SomeComponent = () => {
    const [value, setValue] = useState(1);

    const handleChangeValue = (nextValue) => {
        setValue(nextValue);
    };
    return (
        <Statusbar value={value} onChange={handleChangeValue}>
            <StatusItem value={1}>Шаг 1</StatusItem>
            <StatusItem value={2}>Шаг 2</StatusItem>
            <StatusItem value={3}>Шаг 3</StatusItem>
            <StatusItem value={4}>Шаг 4</StatusItem>
            <StatusItem value={5}>Шаг 5</StatusItem>
        </Statusbar>
    );
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField name="email" label="email" />
                <TextField name="password" label="Пароль" type="password" />
            </FormComponent>
            <Divider />
            <SomeComponent />
        </CardWrapper>
    );
};

export default ReactChildrenExample;
