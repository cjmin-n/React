import { useEffect, useState } from "react";

export const ApiCall = () => {
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");
    const [lyrics, setLyrics] = useState([]);


    
    useEffect(()=>{
       
    }, []);

    const apiCall = () => {
        fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(r=>r.json())
        .then(data=>{
            //console.log(data)
            setLyrics(data);
        });
    }

    const onChangeHandler = e => {
        setArtist(e.target.value);
    }
    const onChangeHandler2 = e => {
        setTitle(e.target.value);
    }

    const onClickHandler = () => {
        apiCall();
    }
    
    return(
        <>
        <h1>노래 가사 찾깅</h1>
        <label htmlFor="">가수</label><input type="text" onChange={onChangeHandler}/><br/>
        <label htmlFor="">제목</label><input type="text" onChange={onChangeHandler2}/><br/>
        <button onClick={onClickHandler}>찾기</button>
        <p>{lyrics.lyrics}</p>
        
            
            
        </>
    )
}