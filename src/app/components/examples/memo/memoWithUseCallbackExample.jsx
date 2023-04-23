import React, { useCallback, useEffect, useMemo, useState } from "react"; //, useCallback
import PropTypes from "prop-types";
import Divider from "../../common/divider";
/*
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary ms-me-2" onClick={onLogOut}>
            LogOut
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

// функция сверки
function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    } else {
        return true;
    }
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);
    return (
        <>
            <button
                className="btn btn-primary ms-me-2"
                onClick={() => setState(!state)}
            >
                initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
*/
const Parent = () => {
    const [count, setCount] = useState(0);

    const handleCount = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    const user = useMemo(
        () => ({
            name: "Sarah Sullivan",
            phone: "1-976-631-1449",
            email: "fringilla.purus.mauris@protonmail.com",
            address: "2660 Fringilla Av."
        }),
        []
    );

    return (
        <div>
            <Divider />
            <h2>Count: {count}</h2>

            <div>
                <Children onIncrement={handleCount} user={user} />
            </div>
        </div>
    );
};

const Children = React.memo(({ user, onIncrement }) => {
    useEffect(() => {
        console.log("render");
    });

    return (
        <div>
            {user.name}
            <div>
                <button className="btn btn-primary" onClick={onIncrement}>
                    +
                </button>
            </div>
        </div>
    );
});
Children.propTypes = {
    user: PropTypes.object,
    onIncrement: PropTypes.func
};

export default Parent;

// можно использовать простое сравнение для предотвращения избыточного рендаринга или isEqual (из lodash)
// function areEqual(prevProps, nextProps) {
//     return prevProps.user.name === nextProps.user.name;
// }
