import { useEffect, useState } from "react";

export const Year = () => {

    const [second, setSecond] = useState(10);
    const [inputValue, setInputValue] = useState('');
    /* const [year, setYear] = useState({year: ''}); */
    const [isTrue, setIsTrue] = useState(false);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSecond(value => value<=0 ? alert("시간초과 !! !") : value-1);
        }, 1000);

        return () => clearInterval(interval);
    }, [second]);
    /* useEffect(()=>{
        const interval = setInterval(()=>{
            setSecond(value => value<=0 ? alert("시간초과 !! !") : value-1);
        }, 1000);

        return () => clearInterval(interval);
    }, []); */

    /* useEffect(()=>{
        console.log("감지됨");
    }, [year.year]); */

    const onChangeHandler = e => {
        setInputValue(e.target.value);
        /* setYear({
            ...year,
            [e.target.name] : e.target.value
        }) */
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