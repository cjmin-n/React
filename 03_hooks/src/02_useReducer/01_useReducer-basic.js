import { useReducer, useState } from "react"

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    // useState의 set은 자기자신의 현재 값을 콜백함수의 인자로 받아올 수 있다..
    const plus = () => {
        setCounter(r=>r+1);
    }
    const minus = () => {
        setCounter(r=>r-1);
    }

    return (
        <>
            <h1>counter : {counter}</h1>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    )
}


const reducer = (state, action) => { // (state: reducer에 넣어준 state, action: dispatch 인자)

    switch(action.type){
        case 'DECREMENT' :
            return {value: state.value-1};
        case 'INCREMENT' :
            return {value: state.value+1};
        default :
            return state;
    }
}

const UseReducerBasic = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    // [상태, 상태에 변화를 줄 함수] = useReducer(함수, state(객체)) ->순서가 바뀜

    return (
        <>
            <h1>count : {state.value}</h1>
            <button onClick={()=>dispatch({type: "DECREMENT"})}>-1</button>
            <button onClick={()=>dispatch({type: "INCREMENT"})}>+1</button>
        </>
    );
}

export default UseReducerBasic;