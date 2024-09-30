import { useState, useEffect } from "react";
import { getAllCoffee } from "../api/CoffeeApi";
import CoffeeItem from "../components/CoffeeItem";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const [menuList, setMenuList] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        setMenuList(getAllCoffee());
    }, []);

    return (
        <main>
            <h2>메뉴</h2>
            <ul>
                {menuList.map(menu => <CoffeeItem key={menu.id} menu={menu}/>)}
            </ul>
            <button onClick={()=>navigate("/order")}>주문확인</button>
        </main>
    )
}

export default Menu;