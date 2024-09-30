import { useState } from "react";

const Menu = () => {

    const [menu, setMenu] = useState(0); 

    const onChange = () => setMenu(menu+1);
    
    return (
        <div>
            <h1>메뉴 목록 : {menu}</h1>
            <button onClick={onChange}>+1</button>
        </div>
    )
}

export default Menu;