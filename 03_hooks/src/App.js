import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { TimeContainer } from "./question/timer";
import { Year } from "./question/year";
import { Profile } from "./question/profile";
import UseReducerBasic, { Counter } from "./02_useReducer/01_useReducer-basic";
import ReducerFormControl, { Input, ReducerFormControl2 } from "./02_useReducer/02_reducer-form-control";
import { ReducerApp } from "./question/reducer";
import { TimerNew } from "./question/timer-new";
import { HardCalculator } from "./03_useMemo/01_hard-calculator";
import { ComplexCalculator } from "./03_useMemo/02_complex-calculator";
import { UseMemoComponent } from "./03_useMemo/03_performance-useMemo";
import { LocationComponent } from "./03_useMemo/04_object-type-problem";
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
            {/* <Profile/> */}
            {/* <Counter/> */}
            {/* <UseReducerBasic/> */}
            {/* {<ReducerFormControl/>} */}
            {/* <ReducerFormControl2 /> */}
            {/* <Input/> */}
            {/* {<ReducerApp/>} */}
            {/* {<TimerNew/>} */}
            {/* <HardCalculator/> */}
            {/* <ComplexCalculator/> */}
            {/* <UseMemoComponent/> */}
            <LocationComponent/>
        </>
    );
}

export default App;
