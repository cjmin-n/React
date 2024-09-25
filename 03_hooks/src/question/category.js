import { useEffect, useMemo, useState } from "react";

export const Category = () => {
    const [category, setCategory] = useState("모든 카테고리");
    const [number, setNumber] = useState(0);
    const products = [
        { name: "아이폰 16", category: "전자제품" },
        { name: "맥북 프로", category: "전자제품" },
        { name: "에어팟", category: "전자제품" },
        { name: "삼성 갤럭시", category: "전자제품" },
        { name: "나이키 운동화", category: "의류" },
        { name: "아디다스 티셔츠", category: "의류" },
        { name: "믹서기", category: "가전제품" },
        { name: "전자레인지", category: "가전제품" },
    ];

  
    
    useEffect(()=>{
        setNumber(classify.length);
    }, [category])

    const classify = useMemo(()=>{
        if(category=="모든 카테고리"){
            return products;
        }else {
            return products.filter(product=>product.category == category);
            
        }
        
    }, [category]);
    

    const onClickHandler = e => {
        setCategory(e.target.textContent);
    }


    const productList = classify.map((product, index)=>{
        return <li key={index}>{product.name}</li>
    })
    

    return (
        <>
            <h1>상품 목록</h1>
            <div>
                <button onClick={onClickHandler}>모든 카테고리</button>
                <button onClick={onClickHandler}>전자제품</button>
                <button onClick={onClickHandler}>의류</button>
                <button onClick={onClickHandler}>가전제품</button>
            </div>
            <h2>총 {number}개의 상품</h2>
            <ul>
                {productList}
            </ul>
        </>
    )
}