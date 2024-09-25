import { useEffect, useMemo, useState } from "react"

export const Caculator = () => {
    // #useState
    const [input, setInput]= useState('');
    const [values, setValues] = useState([]);

    useEffect(()=>{
        // console.log("변화");
        setValues(input.split(','));
        // console.log(values);
    }, [input]);

    const valueList = values.map((value, index)=>{

        const number = isNaN(value)? 0 : value**2;

        return (
            <li key={index}>{number}</li>
        )
    });
    
    const onChangeHandler = e => {
        setInput(e.target.value);
        // console.log(input);
    }


    return(
        <>
            <h1>숫자 제곱 계산기</h1>
            <input type="text" placeholder="숫자(쉼표로 구분) 입력" value={input} onChange={onChangeHandler}/>
            <h2>제곱값:</h2>
            <ul>
                {valueList}
            </ul>
        </>
    )
}


export const Caculator2 = () => {
   
    // #useMemo
    const [numbers, setNumbers] = useState('');

    const squareNumbers = useMemo(()=>{
        return numbers.split(',').map( num =>{
            return isNaN(num) ? 0 : num ** 2;
        })
    }, [numbers])

    const valueList = squareNumbers.map((number, index)=>{        
        return <li key={index}>{number}</li>
    });

    const onChangeHandler2 = e => {
        setNumbers(e.target.value);
    }

    return(
        <>
            <h1>숫자 제곱 계산기</h1>
            <input type="text" placeholder="숫자(쉼표로 구분) 입력" onChange={onChangeHandler2}/>
            <h2>제곱값:</h2>
            <ul>
                {valueList}
            </ul>
        </>
    )
}