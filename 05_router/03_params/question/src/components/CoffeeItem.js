import { Link } from "react-router-dom";


const CoffeeItem = ({menu}) => {
    
    
    return (
        <li>
            <Link to={`/menu/${menu.id}`}>
                {menu.name} - \{menu.price}
            </Link>
            
        </li>
    )
}

export default CoffeeItem;