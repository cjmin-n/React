import { useEffect, useState } from "react";
import CatItem from "../components/CatItem";

const CatContainer = () => {
    const API_KEY = 'live_I3nzKnTpNjzyXLZp0RtbUU1mRjTwK7uAEECexmUv6u3djBsNDYSaX4Isn5PDyZo9';
    const [catName, setCatName]= useState("");
    const [catList, setCatList] = useState([]);
    const [findCat, setFindCat] = useState([]);

    const onClickHandler = () => {
        
        if(catName === ""){
            setFindCat("");
        }else {
            const search = catList.filter(cat => cat.id.match(catName));
            setFindCat(search);
        }
        
    }

    
    
    
    useEffect(()=>{
        fetch("https://api.thecatapi.com/v1/breeds", {
            headers: {
                 'x-api-key' : API_KEY 
            },
        }).then(r=>r.json())
        .then(data=> setCatList(data));
    }, []);

  

    return(
        <>
            <h1>🐱고양이 품종 검색🐈</h1>
            <input type="search" name="search" id="" onChange={e=>setCatName(e.target.value)}/><button onClick={onClickHandler}>검색</button>
            <br/>
            {
                findCat.length===0? <h4>~~~ 일치하는 고양이 없음 ~ ~~</h4>:<div><img src={findCat[0].image.url} alt="고양이 사진" style={{maxWidth:400}} /></div>
            }
            
            <h3>고양이 {catList.length}마리 있음 ! 😻</h3>
            <ul>
                {catList.map((cat, index)=> <CatItem key={index} cat={cat}/>)}
            </ul>
        </>
    )
}

export default CatContainer;