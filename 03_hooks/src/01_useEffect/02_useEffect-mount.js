import { useEffect, useState } from "react"

const UseEffectMount = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        console.log("마운트 시점 동작");
    }, 
         // [] // 두번째 인자로 빈 배열을 넣으면 업데이트 시점에는 동작하지 않고 최초 마운트 시에만 동작한다.
        [time] // 대괄호 안의 값이 바뀔때마다 동작한다.
        
    ); 

    return(
        <>
            <button onClick={()=>setTime(new Date().toLocaleTimeString())}>
                현재 시간 확인
            </button>
            <h1>{time}</h1>
        </>
    )


}

export default UseEffectMount;