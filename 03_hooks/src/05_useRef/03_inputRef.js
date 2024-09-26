import { useEffect, useRef, useState } from "react"

export const LoginComponent = () => {
    const [form, setForm] = useState({
        username:'',
        password:''
    });

    useEffect(()=>{
        console.log(userNameRef.current);
        userNameRef.current.focus();
    }, [])

    const userNameRef = useRef();

    const onChangeHandler = e => {
        const changeForm = {...form, [e.target.name] : e.target.value}
        setForm(changeForm);
    }

    const onClickHandler = () => {
        alert(`username : ${form.username} \npassword : ${form.password}`);
        setForm({
            username:'',
            password:''
        });
        userNameRef.current.focus();
    }

    return(
        <>
            <input type="text" name="username" placeholder="이름" onChange={onChangeHandler} value={form.username} ref={userNameRef} />
            <br/>
            <input type="password" name="password" id="" placeholder="비밀번호" onChange={onChangeHandler} value={form.password} />
            <br/>
            <button onClick={onClickHandler}>로그인</button>
        </>
    )

}