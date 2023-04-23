import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";

import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const CloneElementExample = () => {
    const field = <TextField label="email" name="email" />;
    const handleChange = (target) => {
        console.log("change", target);
    };

    const Text = ({ text }) => {
        return <p>{text}</p>;
    };
    Text.propTypes = {
        text: PropTypes.string
    };

    const getTwoParagraph = (text) => {
        const arrParagraph = text.split(/n/);
        return arrParagraph.length > 2
            ? [
                  ...arrParagraph.slice(0, 2),
                  "Для продолжения оформите подписку"
              ].join("n")
            : text;
    };

    const [isSubscribe, setIsSubscribe] = useState(false);
    const someText =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatibus repudiandae sed in, provident quisquam nostrum aliquam doloremque officiis placeat voluptatum aut perspiciatis totam, vero magnam atque inventore facilis aperiam. Quae eveniet expedita deleniti optio nisi, ex eum laborum quaerat architecto saepe enim obcaecati. Laboriosam consequatur excepturi illum, dolore illo nihil id! Quia, nostrum natus dolorem corrupti rerum ab itaque!";
    const myText = <Text text={someText} />;
    const nextText = React.cloneElement(myText, {
        text: isSubscribe
            ? myText.props.text
            : getTwoParagraph(myText.props.text)
    });

    return (
        <>
            <CardWrapper>
                <SmallTitle>Пример</SmallTitle>
                {field}
                <Divider />
                {React.cloneElement(field, {
                    onChange: handleChange,
                    label: "Cloned email"
                })}
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Пример 2</SmallTitle>
                <button
                    className="btn btn-primary mb-2"
                    onClick={() => setIsSubscribe((s) => !s)}
                >
                    Подписаться
                </button>
                {nextText}
            </CardWrapper>
        </>
    );
};

export default CloneElementExample;
