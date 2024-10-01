import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneMovie } from "../api/MovieApi";

const Detail = () => {
    const { movieId } = useParams();
    const [thisMovie, setThisMovie] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        setThisMovie(getOneMovie(movieId));
    }, []);

    return(
        <>
           <h2>{thisMovie.title}</h2>
           <p>연도 : {thisMovie.year}</p>
           <p>설명 : {thisMovie.description}</p>
           <button onClick={()=>navigate(-1)}>돌아가기</button>
        </>
    )
}

export default Detail;