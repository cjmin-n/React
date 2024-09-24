import { useEffect, useState } from "react"



const Timer = ({id, onDelete, index}) => {

    const [second, setSecond] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSecond(value => value+1)
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <p>타이머 {index+1} : {second}초</p>
            <button onClick={()=>onDelete(id)}>삭제</button>  
        </>
    );
}


export const TimeContainer = () => {

    const [timers, setTimers] = useState([]);
    const [count, setCount] = useState(1);
    
    const onClickHandler = () => {

        
        if(timers.length < 5){
            const change = [...timers, {id:count}];

            setTimers(change);
            setCount(count+1);
        }
        
    };

    const deleteTimer = (id) =>{
        setTimers(timers.filter((timer)=>timer.id !== id));
    } 


    return (
        <>
            <button onClick={onClickHandler}>타이머 추가</button>
            {timers.map( (timer, index)=>{
                return <Timer key={timer.id} id={timer.id} index={index} onDelete={deleteTimer} />
            })}
        </>
    )    
}