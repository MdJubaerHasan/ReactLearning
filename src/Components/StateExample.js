import React, { useState } from "react";

function StateExample() {
    // const [count, setCount] = useState(() => {
    //     return 4;
    // });

    // const [count, setCount] = useState( 4);
    // For Object, given bellow
    const [state, setState] = useState({count: 4, theme: 'blue'});
    const count = state.count;
    const theme = state.theme;
    function decrementCount(){
        // setCount(prevCount => prevCount - 1);

        // For Objects , changing specific value
        setState(prevState => {
            return {...prevState, count: prevState.count - 1}
        })
    }
    function incrementCount(){
        // setCount(prevCount => prevCount + 1);
        // For Objects , changing specific value
        setState(prevState => {
            return {...prevState, count: prevState.count + 1}
        })
    }
    return (
        <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span> { theme }</span>
        <button onClick={incrementCount}>+</button>
        </>
    )
}
export default StateExample;