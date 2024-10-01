import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="main">홈</NavLink>
                </li>
                <li>
                    <NavLink to="list">영화 목록</NavLink>
                </li>
                <li>
                    <NavLink to="add">영화 추가하기</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;