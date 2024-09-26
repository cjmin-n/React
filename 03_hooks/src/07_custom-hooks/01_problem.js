import { useEffect, useState } from "react"

export const HooksProblem = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // 아래의 경우 함수가 처리하는 내용이 동일하기 때문에 행위를 공통적으로 처리할 수 있다..
    /* const handleName = e => setName(e.target.value);
    const handlePassword = e => setPassword(e.target.value); */
    const handleEmail = e => setEmail(e.target.value);

   

    const handleName = e => {
        setName(e.target.value);

        if(e.target.value.match(/[가-힇]+/)){
            console.log("한글 잘 입력중이네");
        }
    }


    const handlePassword = e => {
        setPassword(e.target.value);
        if(e.target.value.length >= 10){
            console.log("10자리 이상 잘 입력 함");
        }
    }


    return (
        <>
            <label htmlFor="">이름 : </label>
            <input type="text" onClick={handleName} />
            <br/>
            <label htmlFor="">비밀번호 : </label>
            <input type="password" onClick={handlePassword} />
            <br/>
            <label htmlFor="">이메일 : </label>
            <input type="email" onClick={handleEmail} />
            <br/>
            <h4>name : {name}</h4>
            <h4>password : {password}</h4>
            <h4>email : {email}</h4>
        </>
    )
}