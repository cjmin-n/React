import { useEffect, useState } from "react"

const Item = ({id, onDelete}) => {

    const [second, setSecond] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSecond(value => value+1);
        }, 1000);

        return ()=>clearInterval(interval);
    }, []);

    
    return (
        <>  
            <p>타이머 {id} : {second}</p>
            <button onClick={onDelete(id)}>삭제</button>
        </>
    )
}

const Timer = ({timers, setTimers}) => {
    const [second, setSecond] = useState(0);
    const onDelete = id => {
        //console.log(id);
        setTimers(timers.filter(timer => timer.id !== id));
    };

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSecond(value => value+1);
        }, 1000);

        return ()=>clearInterval(interval);
    }, []);


    return (
        timers.map((timer)=>{
            /* return <Item key={timer.id} id={timer.id} onDelete={onDelete}/> */
            return (
                <div key={timer.id} >  
                    <p>타이머 {timer.id} : {second}</p>
                    <button onClick={onDelete(timer.id)}>삭제</button>
                </div>
            );
        })
    );
}

export const TimerNew = () => {
    
    const [timers, setTimers] = useState([]);
    const [count, setCount] = useState(1);

    const onClickHandler = () => {
        if(timers.length < 5){
            setTimers([...timers, {id: count}]);
            setCount(count+1);
        }
    }

    
    return (
        <>
            <button onClick={onClickHandler}>타이머 추가</button>
            <Timer timers={timers} setTimers={setTimers}/>
        </>
    );
}