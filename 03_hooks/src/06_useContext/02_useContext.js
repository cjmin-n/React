
/* 
    context는 react 컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있도록
    고안된 방법이다.. 트리 구조가 복잡해질수록 하위 컴포넌트로 props를 전달하는
    양이 많아지고, 그러면 유지보수와 코드 가독성에 악영향을 준다..

    하지만 context 를 사용하면 중간 컴포넌트 들에게 props 를 넘겨주지 않아도 되고
    유지보수도 수월해지게 된다..
    단, context 를 사용하면 컴포넌트를 재사용하기 어려워지기 때문에
    꼭 필요할 때 써야한다..
    따라서 때에 따라서는 context 보다 props 가 더 간단한 해결책이 될 수 있다.
*/

import { createContext, useContext, useState } from "react";
import { Styles } from "./style";

// 컨텍스트 생성 -> 별도의 저장소를 만듦..
const DarkModeContext = createContext(null);
// 전역적으로 공유하고 싶은 것 중 useState 가 아닌 것들은 createContext()에 넣어주면 된다. // 사용은 잘안함

const Header = () => {

    const context = useContext(DarkModeContext);
    const {isDark} = context;

    return(
        <header style={{
            ...Styles.header,
            backgroundColor:isDark?"black":"lightgray",
            color:isDark?"white":"black"
        }}>
            <h1>Welcome to useContext</h1>
        </header>
    );
}

const Content = () => {
    const context = useContext(DarkModeContext);
    const {isDark} = context;

    return(
        <div style={{
            ...Styles.content,
            backgroundColor:isDark?"gray":"white",
            color:isDark?"white":"black"
        }}>
            <p>내용입니다..</p>
        </div>
    );
}

const Footer = () => {
    const context = useContext(DarkModeContext);
    const {isDark, setIsDark} = context;
    const toggleHandler = () => setIsDark(!isDark);

    return(
        <footer style={{
            ...Styles.footer,
            backgroundColor:isDark?"black":"lightgray",
            color:isDark?"white":"black"
        }}>
            <button onClick={toggleHandler}>{isDark?"Light Mode":"Dark Mode"}</button>
            useContext App
        </footer>
    );
}

const Page = () => {
    return (
        <div style={{
            ...Styles.page
        }}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

const ContextContainer = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        // context이름.Provider 컴포넌트 :  자식 요소들(<Page/>)이 사용할 수 있도록 value에 전달할 값들을 담아줌.
        <DarkModeContext.Provider value={{isDark, setIsDark}}> 
            <Page/>
        </DarkModeContext.Provider>
    )
}

export default ContextContainer;


/* 
    useContext 의 단점..

    1. 성능 저하 
    Context 는 전역 상태를 공유하기 때문에 공유된 상태가 변경되면
    그 상태를 구독하는 모든 컴포넌트가 리렌더링 된다.
    만약 Context 를 많이 사용하고 그 상태들이 자주 변경되면, 
    불필요한 리 렌더링이 발생하여 성능이 저하될 수 있다..

    2. 컴포넌트 재사용성 감소
    Context 에 의존하는 컴포넌트가 많아질 수록, 해당 컴포넌트는 그 Context 환경 안에서만 동작할 수 있다..
    이런 컴포넌트는 독립적으로 재사용하기 어려워지며, 다른 부분에서 쓰기 어렵다..

    3. 구조적인 복잡성 증가
    Context 를 많이 사용하면 프로젝트 구조가 복잡해진다.. 
    여러 Context 가 중첩되면 코드의 가독성이 떨어지고 유지보수에 악영향을 끼친다..
    많은 컴포넌트가 여러 Context 에 의존하면, 프로젝트의 복잡도가 급격히 증가한다..

    -> 관리 x 공유 o 관리는 useState에서
    / 상태 관리를 하지 않기 때문에 단순한 것을 넘기는것은 괜찮지만 복잡한 것을 넘기는것은 어려움
*/