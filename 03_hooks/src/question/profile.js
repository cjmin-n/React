import { useEffect, useState } from "react";

export const Profile = () => {

    const [userInput, setUserInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [users, setUsers] = useState({username: userInput, email: emailInput});

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    

    useEffect(()=>{
        setTimeout(()=>{
            setUserInput("홍길동");
            setEmailInput("hong@example.com");
            setUsers({username: "홍길동", email: "hong@example.com"})
        }, 1000);
    }, []);

    useEffect(()=>{
        console.log("이름 또는 이메일이 변경되었습니다.");
        console.log(users);
    }, [users]);

    const onChangeName = e => {
        setUsers({...users, [e.target.name] : e.target.value});
        setUserInput(e.target.value);
    }
    const onChangeMail = e => {
        setUsers({...users, [e.target.name] : e.target.value});
        setEmailInput(e.target.value);
    }

    const onClickSave = () => {
        setName(userInput);
        setEmail(emailInput);
    }

    return (
        <>
            <h1>프로필 입력</h1>
            <div>
                <label htmlFor="name">이름:</label>
                <input type="text" id="name" name="username" value={userInput} onChange={onChangeName}/>
            </div>
            <div>
                <label htmlFor="email">이메일:</label>
                <input type="text" id="email" name="email" value={emailInput} onChange={onChangeMail}/>
            </div>
            <button onClick={onClickSave}>저장</button>

            <h1>프로필 미리보기</h1>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
        </>
    );
}