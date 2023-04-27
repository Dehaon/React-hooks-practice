import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <List>
                <Component />
                <Component />
                <Component />
            </List>
        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return <div>{number}. Компонент списка</div>;
};
Component.propTypes = {
    number: PropTypes.number
};

export default ChildrenExercise;

const List = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { ...child.props, number: index + 1 });
    });
};

List.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
