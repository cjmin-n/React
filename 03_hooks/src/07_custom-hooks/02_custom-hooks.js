import { useState } from "react";

const useInput = () => {
    const [value, setValue] = useState("");

    const onChange = e => setValue(e.target.value);

    return {value, onChange};
}


export const CustomHooks = () => {
    const name = useInput();
    const pass = useInput();
    const email = useInput();

    return (
        <>
            <label htmlFor="">이름 : </label>
            <input type="text" value={name.value} onChange={name.onChange}/>
            <br/>
            <label htmlFor="">비밀번호 : </label>
            <input type="password" {...pass}/> 
            {/* 속성이랑 키 값이 같을 때 {...pass} 전개연산자로 사용가능 */}
            <br/>
            <label htmlFor="">이메일 : </label>
            <input type="email" {...email}/> 

            <h4>name : {name.value}</h4>
            <h4>pass : {pass.value}</h4>
            <h4>email : {email.value}</h4>
        </>
    )
}

