import { getMovieData } from "../api/MovieApi";
import { useEffect } from "react";
import MovieItem from "../components/MovieItem";


const List = ({movieList, setMovieList}) => {


    useEffect(()=>{
        setMovieList(getMovieData());
    }, []);

    
    

    return (
        <>
            <h2>영화 목록</h2>
            <ul>
                {
                    movieList.map((movie, index) => <MovieItem key={index} movie={movie} />)
                }
            </ul>
        </>
    )
}

export default List;