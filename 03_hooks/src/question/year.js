import { useEffect, useState } from "react";

export const Year = () => {

    const [second, setSecond] = useState(10);
    const [inputValue, setInputValue] = useState('');
    const [isTrue, setIsTrue] = useState(false);

    useEffect(()=>{
        if(second>0){
            const interval = setInterval(()=>{
                setSecond(s=>s-1);
            }, 1000);

            return () => clearInterval(interval);
        }else {
            console.log("타이머가 종료되었습니다.");
            setTimeout(alert("시간초과!"),0);
        }
        

        
    }, [second]);
    /* useEffect(()=>{
        const interval = setInterval(()=>{
            setSecond(value => value<=0 ? alert("시간초과 !! !") : value-1);
        }, 1000);

        return () => clearInterval(interval);
    }, []); */

   

    const onChangeHandler = e => {
        setInputValue(e.target.value);
        
    };

    const thisYear = new Date().getFullYear();
    
    const onClickHandler = () => {
        (inputValue == thisYear) ? alert(`정답입니다! 올해는 ${thisYear}년도입니다`) : alert("틀렸습니다!");
    }

    return (
        <>
            <h1>문제 : 올해는 몇년도일까요?</h1>
            <p>남은시간 {second}초</p>
            <input type="text" name="year" id="" value={inputValue} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>제출</button>
        </>
    );
}