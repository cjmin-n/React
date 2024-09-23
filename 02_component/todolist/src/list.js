export const List = (props) => {

    // 리스트 삭제
    const onDelete = id => {
        const change = props.checks.filter(current => current.id !== id);

        props.setCheck(change);
    }


    // 체크박스 체크했을 때
    const onCheck = e => {
        const label = e.target.nextElementSibling;
        label.style.textDecoration = props.isOn ? "none" : "line-through";
        //props.isOn ? label.style.textDecoration = "none" : label.style.textDecoration = "line-through";
        
        //props.setIsOn(props.isOn? false : true);
        props.setIsOn(!props.isOn);
    };
    /* const onCheck = e => {
        const label = e.target.nextElementSibling;
        if(e.target.checked){
            label.style.textDecoration = "line-through";
        }else {
            label.style.textDecoration = "none";
        }
        
    } */


    // 체크리스트 배열
    const checklist = props.checks.map(current => {
        return(
            <div key={current.id} style={{color:props.color}}>
                <input type="checkbox" name="todolist" id={`check${current.id}`} onChange={onCheck}/>
                <label htmlFor={`check${current.id}`}>{current.value}</label>
                <button onClick={()=>onDelete(current.id)}>삭제</button>
            </div>
        );
    });

    return (
        <div className="list">
            {checklist}
        </div>
    );
}