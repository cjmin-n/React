import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}> 
                {/* 하위의 컴포넌트들은 같은 Layout 을 사용한다. */}
                    <Route index element={<Main/>}/> {/* 기본값 */}
                    <Route path="main" element={<Main/>}/>
                    <Route path="mypage" element={<Mypage/>}/>
                    <Route path="login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
