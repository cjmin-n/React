/* 
    promise 는 콜백 지옥과 같은 코드가 형성되지 않게
    (비동기 통신 간의 순서를 정하기 쉽게) 하는 방안으로
    ES6 에서 도입되었다..

    promise 객체 생성 이유?
    1. 비동기 처리 함수를 실행 시 성공, 실패에 대한 처리가 용이하다..
    2. promise 객체가 제공하는 메소드를 사용하기 위함
    (콜백 지옥 상황을 해소해 주기 때문.. 가독성이 좋고, 메소드 체이닝 방식 제공)
*/

const increase = number => {
    const promise = new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
            const result = number + 10;
            if(result > 50){
                const e = new Error("numberToBig");
                return reject(e); // return 생략 가능
            }
            resolve(result);
        }, 1000);
    });
    return promise;
}
// Promise 객체 내부 내용을 동기로 처리한다. (기다려줌) 함수의 인자로 원하는 작업을 하고 값을 return해준다. - 성공 : resolve(값), 실패: reject(값)

console.log(increase(0)); // Promise { <pending> } // 값을 반환하는게 아니라 비동기로 처리한 약속자체를 반환해준다.

// 체이닝
// promise 객체는 then 메소드를 사용하여 비동기 작업의 결과를 처리할 수 있다..

increase(0).then(number => {
    console.log(number)
    return increase(number);
}).then(number => {
    console.log(number);
    return increase(number);
}).catch(e=>console.log(e, "가 발생했네")); // then() 인자로 결과값을 받아옴..



/* 
    1. resolve 값 반환
    -> increase() 의 인자값 40이하 넣었을 때 값 출력

    2. reject 값 반환
    -> increase() 의 인자값 41이상 일때 에러발생 catch에 넣어둔 값 발생
    Error: numberToBig
        at Timeout._onTimeout (c:\20240801-gangnam\07_react\04_async\src\01_intro\03_promise.js:17:27)
        at listOnTimeout (node:internal/timers:581:17)
        at process.processTimers (node:internal/timers:519:7) 가 발생했네
*/
