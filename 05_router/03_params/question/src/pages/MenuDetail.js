import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { selectCoffee } from "../api/CoffeeApi";

const MenuDetail = ({shopList, setShopList}) => {
    const {menuCode} = useParams();
    const [menu, setMenu] = useState({
            name: '', 
            price: '',
            description: ''
        });

    const navigate = useNavigate();
    
    useEffect(()=> {
        setMenu(selectCoffee(menuCode));
    }, [])


    const onClickHandler = () => {
        setShopList([...shopList, menu]);
        navigate(-1);
    }


    return (
        <>
            <h2>{menu.name}</h2>
            <p>가격 : \{menu.price}</p>
            <p>설명 : {menu.description}</p>
            <button onClick={onClickHandler}>장바구니 추가</button>
            <button onClick={()=>navigate(-1)}>돌아가기</button>
        </>
    )
}

export default MenuDetail;