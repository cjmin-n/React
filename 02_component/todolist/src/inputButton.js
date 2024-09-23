import React from 'react';

const {useState} = React;

const InputButton = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [nextId, setNextId] = useState(3);
   
    // 입력값 추가하기
    const onAdd = e => {
        setInputValue(e.target.value);
    }
    
    const onClickAdd = () => {
        const change = props.checks.concat({id: nextId, value: inputValue});
    
        props.setCheck(change);
        setInputValue("");
        setNextId(nextId+1);
    }
    
    
    return(
        <>
            <input type="text" value={inputValue} onChange={onAdd} /><button onClick={onClickAdd}>추가</button>
        </>
    );
}

export default InputButton;