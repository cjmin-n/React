import { useReducer, useState } from "react";

const reducer = (state, action) => {
    console.log(action);
    return ({
        ...state,
        [action.name] : action.value
    })
}


export const Input = () => {

    const [state, dispatch] = useReducer(reducer, {
        pass: '',
        passcheck: ''
    });
    
    const {pass, passcheck} = state;
    const onChangeHandler = e => dispatch(e.target);

    return (
        <>
            <label htmlFor="">비밀번호 : </label>
            <input type="password" name="pass" onChange={onChangeHandler} />
            <br/>
            <label htmlFor="">비밀번호 확인 : </label>
            <input type="password" name="passcheck" onChange={onChangeHandler} />

            <div>
                <h3>입력한 비밀번호 : {pass}</h3>
                <h3>입력한 비밀번호 확인 : {passcheck}</h3>
            </div>
        </>
    )
}


const ReducerFormControl = () => {

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const {name, nickname} = state;
    const onChangeHandler = e => dispatch(e.target);


    return (
        <>
            <label htmlFor="">이름 : </label>
            <input type="text" name="name" onChange={onChangeHandler} />
            <br/>
            <label htmlFor="">닉네임 : </label>
            <input type="text" name="nickname" onChange={onChangeHandler} />

            <div>
                <h3>입력한 이름 : {name}</h3>
                <h3>입력한 닉네임 : {nickname}</h3>
            </div>
        </>
    )
}

export default ReducerFormControl;


// useState version
export const ReducerFormControl2 = () => {

    const [users, setUsers] = useState({name: '', nickname: ''});
    const {name, nickname} = users;

    const onChangeHandler = e => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <label htmlFor="">이름 : </label>
            <input type="text" name="name" onChange={onChangeHandler} />
            <br/>
            <label htmlFor="">닉네임 : </label>
            <input type="text" name="nickname" onChange={onChangeHandler} />

            <div>
                <h3>입력한 이름 : {name}</h3>
                <h3>입력한 닉네임 : {nickname}</h3>
            </div>
        </>
    )
}