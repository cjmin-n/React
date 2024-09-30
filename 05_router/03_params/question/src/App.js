import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import MenuDetail from "./pages/MenuDetail";
import { useState, useEffect } from "react";

function App() {
  const [shopList, setShopList] = useState([]);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="main" element={<Main/>}/>
            <Route path="menu">
              <Route index element={<Menu/>}/>
              <Route path=":menuCode" element={<MenuDetail shopList={shopList} setShopList={setShopList}/>} />
            </Route>
            <Route path="order" element={<Order shopList={shopList}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
