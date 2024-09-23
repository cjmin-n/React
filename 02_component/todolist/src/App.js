import React from 'react';
import { List } from './list';
import InputButton from './inputButton';
import './style.css';


const {useState} = React;

function App() {

    // toggle
    const [isOn, setIsOn] = useState(false);

    // 다크모드
    const defaultMode = {
        backgroundColor: 'white', color: 'black'
    };
    const darkMode = {
        backgroundColor: 'black', color: 'white'
    };

    const [mode, setMode] = useState(defaultMode);

    const onDarkMode = e => {
        isOn ? setMode(defaultMode) : setMode(darkMode);    
        setIsOn(isOn? false: true);
       
        e.target.classList.toggle("clicked");
    }
    // const onDarkMode = e => {
    //     if(e.target.parentNode.style.backgroundColor == "black"){
    //         setMode({backgroundColor: 'white', color: 'black'});  
    //     }else {
    //         setMode({backgroundColor: 'black', color: 'white'});    
    //     }
        
    // }

    // list array
    const [checks, setCheck] = useState([
        {id:1, value:"안녕"},
        {id:2, value:"안녕2"},
    ]);
    

    // list 색변경
    const [color, setColor] = useState("");
    const [colorValue, setColorValue] = useState("");

    const onChangeColor = e => setColorValue(e.target.value);
    
    const onClickChangeColor = () => {
        setColor(colorValue);
    }

  return (
    <>
        <div style={mode}>
            <div className="top">
                <h1>Todo-list</h1>  
                <button onClick={onDarkMode} className="btn-mode">다크모드</button>
            </div>
            
            <List color={color} checks={checks} setCheck={setCheck} isOn={isOn} setIsOn={setIsOn}/>
            <InputButton checks={checks} setCheck={setCheck}/>
            <input type="text" value={colorValue} onChange={onChangeColor}/><button onClick={onClickChangeColor}>색변경</button>
        </div>
    </>
  );
}

export default App;
