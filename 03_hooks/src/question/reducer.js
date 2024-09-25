import { useReducer } from "react"

const reducer = (state, action) => {

    switch(action.type)   {
        case 'INCREMENT' :
            return({value:state.value+1});
        case 'DECREMENT' :
            return({value:state.value-1});
        case 'text' : 
            return({
                ...state, 
                [action.name] : action.value
            });
        default :
            return state;
    }
}

// const Counter = ({state, dispatch}) => {
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    const {value} = state;

    return(
        <>
            <h1>Counter {value}</h1>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-1</button>
        </>
    );
}
// const Input = ({state, dispatch}) => {
const Input = () => {
    const [state, dispatch] = useReducer(reducer, {text: ''});

    const {text} = state;

    return (
        <>  
            <input type="text" name="text" onChange={e=>dispatch(e.target)}/>
            <p>입력한 텍스트 : {text}</p>
        </>
    );
}

export const ReducerApp = () => {
    const allState = {value: 0, text: ''};
    const [state, dispatch] = useReducer(reducer, allState);

    return (
        <>
            <Counter state={state} dispatch={dispatch}/>
            <Input state={state} dispatch={dispatch}/>
        </>
    );
}