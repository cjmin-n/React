import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = {
        backgroundColor : "blue"
    }

    return (
        <div>
            <ul>
                <li>
                    <NavLink to={"/"} style={({isActive}) => isActive? activeStyle : undefined}>
                        home
                    </NavLink>
                </li> 
                {/* isActive는 NavLink 제공 -> 현재 컴포넌트가 to 내부의 경로와 일치하면 true를 반환한다. */}
                <li>
                    <NavLink to={"/main"} style={({isActive}) => isActive? activeStyle : undefined}>
                        main
                    </NavLink>
                </li> 
                <li>
                    <NavLink to={"/mypage"} style={({isActive}) => isActive? activeStyle : undefined}>
                        mypage
                    </NavLink>
                </li> 
                <li>
                    <NavLink to={"/login"} style={({isActive}) => isActive? activeStyle : undefined}>
                        login
                    </NavLink>
                </li> 
            </ul>
        </div>
    )
}

export default Navbar;