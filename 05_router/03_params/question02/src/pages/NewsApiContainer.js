import { useEffect, useState } from "react"
import NewsItem from "../components/NewsItem";
import "./style.css";
import NewsStyle from "./NewsApiContainer.css";

const NewsApiContainer = () => {
    const API_KEY = "b2f485cd2f274a5ba62325da31653420";    
    const [newsList, setNewsList] = useState([]);

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        .then(r=>r.json())
        .then(d=>/* console.log(d.articles) */ setNewsList(d.articles));
    }, []);


    return(
        <div className="newsList" style={NewsStyle.newsList}>
            <ul>
                {
                    newsList.map((news, index)=><NewsItem key={index} news={news}/>)
                }
            </ul>
        </div>
    )
}

export default NewsApiContainer;



