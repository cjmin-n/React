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
        // const change = props.checks.concat({id: nextId, value: inputValue});
        const change = [...props.checks, {id: nextId, value: inputValue}];
    
        props.setCheck(change);
        setInputValue("");
        setNextId(nextId+1);

        alert("추가 완료!");
    }
    
    
    return(
        <div>
            <input type="text" value={inputValue} onChange={onAdd} placeholder="추가할 일을 입력해주세요."/><button onClick={onClickAdd}>추가</button>
        </div>
    );
}

export default InputButton;