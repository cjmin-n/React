import "./MenuItem.css";
// 전역변수처럼 사용될 수 있어서 변수로 담아서 사용하는 것이 좋음
import { Link } from "react-router-dom";

const MenuItem = ({menu}) => {

    return (
        <Link to={`/menu/${menu.menuCode}`}>
            <div className="MenuItem">
                <h3>이름 : {menu.menuName}</h3>
                <h3>가격 : {menu.menuPrice}</h3>
                <h3>종류 : {menu.categoryName}</h3>
            </div>
        </Link>
    );
}

export default MenuItem;