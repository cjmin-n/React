/* 
    useEffect 는 기본적으로 렌더링 직후와 업데이트 직후 호출된다..
    컴포넌트가 마운트 해제되기 직전이나 업데이트 되기 전에
    실행할 내용이 있다면 정리 (clean-up) 을 할 수 있다..
    이전 effect 내용을 정리하고 난 뒤 새로운 effect 가 동작하도록 할 때 사용한다..
    이전 effect 가 남아있는 상태에서 새로운 effect 가 발생하게 되면
    마운트 해제가 일어나고 나서도 메모리 누수나 충돌이 발생할 가능성이 있다..
*/

import { useEffect, useState } from "react"



const Timer = () => {
    const [cont, setCont] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{

        console.log("타이머가 시작됨..");

        const timer = setInterval(()=>{
            // console.log(new Date().toLocaleTimeString());
            setCont(new Date().toLocaleTimeString());
        }, (1000));

        return (
            ()=>{
                clearInterval(timer);
                console.log("타이머 끗");
            }
        ) // useEffect가 unMount될때 return이 동작함
    }, []);

    // return <h1>타이머를 시작합니다..</h1>
    return (
        <>
            <h1>타이머를 시작합니다..</h1>
            <h3>{cont}</h3>
        </>
    )
}

export const Container = () => {
    const [isTrue, setIsTrue] = useState(false);

    return (
        <>
            <button onClick={()=>{setIsTrue(!isTrue)}}>타이머 토글</button>
            {isTrue && <Timer/>}
        </>
    )
}