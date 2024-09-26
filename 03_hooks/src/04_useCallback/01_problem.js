import { useCallback, useEffect, useState } from "react"


// 함수 자체를 자식에 props로 뿌려줄 때 사용 
// -> 부모에서 바뀌면 자식 모두에서 다시 렌더링되기때문에 useCallback으로 불필요한 렌더링을 막아줘야한다.
const CallBackProblem = () => {

    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    const printNumber = () => {
        console.log(`current number : ${number}`);
    }

    useEffect(()=>{
        console.log("printNumber 값 변화 인지됨");
    }, [printNumber]);

    
    return(
        <>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
            <br/>
            <button onClick={()=>setToggle(r=>!r)}>{String(toggle)}</button>
            <br/>
            <button onClick={printNumber}>printNumberState</button>
        </>
    );
}

export default CallBackProblem;