import React, { useEffect, useMemo, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run Factorial");
    return factorial(n);
}

function myLoop(n) {
    console.time("Выполнялось: ");
    let i = 0;
    do {
        i++;
    } while (i !== n);
    console.timeEnd("Выполнялось: ");
    return i;
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const renderCount = useRef(0);

    const buttonColor = otherState ? "primary" : "secondary";

    useEffect(() => {
        console.log("render");
        renderCount.current++;
    });

    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);

    const [number, setNumber] = useState(1_000_000_000);

    const complitedResult = useMemo(() => {
        return myLoop(number);
    }, [number]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Render count: {renderCount.current}</p>
                <p>Value: {value}</p>
                <p>Result factorial 100: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Change color
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Замер времени выполнения операции</SmallTitle>
                <div>
                    Вычесленный результат: <b>{complitedResult}</b>
                    <p>number: {number}</p>
                </div>
                <div>
                    <button
                        className="btn ms-md-2 btn-primary"
                        onClick={() =>
                            setNumber((prevState) => prevState + 1000)
                        }
                    >
                        Increment
                    </button>
                    <button
                        className="btn ms-md-2 btn-primary"
                        onClick={() =>
                            setNumber((prevState) => prevState - 1000)
                        }
                    >
                        Decrement
                    </button>
                </div>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
