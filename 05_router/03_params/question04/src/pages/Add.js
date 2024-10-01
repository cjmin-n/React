import { useState } from "react";

import data from "../data/MovieData.json";
import { useNavigate } from "react-router-dom";

const Add = () => {
    // const [addMovie, setAddMovie] = useState({});
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [desc, setDesc] = useState("");
    /* const [id, setId] = useState(getMovieData().length+1); */
    const navigate = useNavigate();

    const onClickHandler = () => {
        
        /* setAddMovie({id, title, year, description:desc});
        setId(id+1); */
        /* console.log(addMovie); */

        const newMovie = {
            id: data.length + 1, // 새로운 ID 생성
            title,
            year,
            description:desc
          };
      
        data.push(newMovie);
        
        
        alert("추가완료!");

        navigate("/list");
    }   

    return (
        <>
            <h2>영화 추가하기</h2>
            <form action="">
                <div>
                    <label htmlFor="title">제목 : </label>
                    <input type="text" id="title" name="title" onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="year">연도 : </label>
                    <input type="number" id="year" name="year" onChange={e=>setYear(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">설명 : </label>
                    <textarea name="description" id="description" onChange={e=>setDesc(e.target.value)}></textarea>
                </div>
            </form>
            <button onClick={onClickHandler}>추가하기</button>
        </>
    )
}

export default Add;