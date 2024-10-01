import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const MovieItem = ({movie}) => {
    

    return <li><Link to={`/list/${movie.id}`}>{movie.title} ({movie.year})</Link></li>
}

export default MovieItem;