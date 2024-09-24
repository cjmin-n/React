import { useEffect, useState } from "react";

const UseEffectUpdate = () => {

    const [user, setUser] = useState({username: '', password: ''});
    const onChangeHandler = e => {
        setUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        console.log("username 변경 감지");
    }, [user.username]);
    
    useEffect(()=>{
        console.log("password 변경 감지");
    }, [user.password]);

    return(
        <>
            <label htmlFor="username">userName : </label>
            <input type="text" name="username" id="username" onChange={onChangeHandler} />
            <br/>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" onChange={onChangeHandler} />
            <h3>username: {user.username}</h3>
            <h3>password : {user.password}</h3>
        </>
    )
}

export default UseEffectUpdate;
