import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { TimeContainer } from "./question/timer";
import { Year } from "./question/year";
import { Profile } from "./question/profile";
//import { Container } from "./01_useEffect/04_useEffect-cleanup";

function App() {

    const [message, setMessage] = useState("안녕하세요");

    return (
        <>
            {/* <UseEffectBasic message={message}/> */}
            {/* <UseEffectMount/> */}
            {/* <UseEffectUpdate/> */}
            {/* <Container /> */}
            {/* <TimeContainer/> */}
            {/* <Year/> */}
            <Profile/>
        </>
    );
}

export default App;
