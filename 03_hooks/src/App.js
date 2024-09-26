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
import { Caculator, Caculator2 } from "./question/calculator";
import { Category, Category2 } from "./question/category";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import CallBackProblem from "./04_useCallback/01_problem";
import FunctionMemoization from "./04_useCallback/02_function-memoization";
import { CallbackComponent } from "./04_useCallback/03_components";
import { CounterRef } from "./05_useRef/01_problem";
import { UseRefCounter } from "./05_useRef/02_useRef";
import { LoginComponent } from "./05_useRef/03_inputRef";
import { Board } from "./question/board";
import Page from "./06_useContext/01_props-dribbling";
import ContextContainer from "./06_useContext/02_useContext";
import { HooksProblem } from "./07_custom-hooks/01_problem";
import { CustomHooks } from "./07_custom-hooks/02_custom-hooks";
import { BoardContainer } from "./question/board copy";


function App() {

    const [message, setMessage] = useState("안녕하세요");

    return (
        <>
            {/* <UseEffectBasic message={message}/> */}
            {/* <UseEffectMount/> */}
            {/* <UseEffectUpdate/> */}
            {/* <Container /> */}
            {/* <TimeContainer/> */}
            {/* {<Year/>} */}
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
            {/* <LocationComponent/> */}
            {/* <Caculator/> */}
            {/* <Caculator2/> */}
            {/* <Category/>
            <Category2/> */}
            {/* <CallBackProblem/> */}
            {/* <FunctionMemoization/> */}
            {/* <CallbackComponent/> */}
            {/* <CounterRef/> */}
            {/* <UseRefCounter/> */}
            {/* <LoginComponent/> */}
            {/* <Board/> */}
            {/* <Page/> */}
            {/* <ContextContainer/> */}
            {/* <HooksProblem/>
            <CustomHooks/> */}
            <BoardContainer/>
        </>
    );
}

export default App;
