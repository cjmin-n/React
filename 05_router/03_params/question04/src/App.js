import Layout from "./layout/Layout";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import List from "./pages/List";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
    const [movieList, setMovieList] = useState([]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="main" element={<Main/>} />
                        <Route path="list">
                            <Route index element={<List movieList={movieList} setMovieList={setMovieList} />}/>
                            <Route path=":movieId" element={<Detail movieList={movieList}/>}/>
                        </Route>
                        <Route path="add" element={<Add />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
