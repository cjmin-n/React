import data from "../data/MovieData.json";

export function getMovieData(){
    return data;
}

export function getOneMovie(id){
    return data.filter(item => item.id === parseInt(id))[0];
}



