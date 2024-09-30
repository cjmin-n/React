import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/> {/* 특정요청 범위 사이에서 선택에 따라 바뀌는 컴포넌트 */}
        </>
    )
}

export default Layout;