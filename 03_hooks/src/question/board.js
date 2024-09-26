import { useState } from "react";

export const Board = () => {
    
    const [board, setBoard] = useState([]);
    const [boardFilter, setBoardFilter] = useState([]);
    
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState([]);

    const onChangeHandler = e => {
       setSubject(e.target.value);
    };

    const onChangeHandler2 = e => {
        setContent(e.target.value);
     };
    

    
    const onClickHandler = () => {
        
        setBoard([
            ...board, 
            {subject,content}
        ]);
        setBoardFilter([
            ...board, 
            {subject,content}
        ]);

        setSubject("");
        setContent("");
        
    };

    const onDelete = subject => {
        const change = boardFilter.filter(list=>list.subject !== subject);
        const change2 = board.filter(list=>list.subject !== subject);
        setBoardFilter(change);
        setBoard(change2);
    }

    const onSearchHandler = e => {
        
       const change = board.filter(item=>item.subject.includes(e.target.value));
       setBoardFilter(change);
    }

    const onChangeComment = e => {
        setComment(e.target.value);
        
    }

    const onComment = () => {
        console.log(comment);
        setCommentList([...commentList, {id:comment}])
        setComment("");
    }

    const onDeleteComment = id => {
        const change = commentList.filter(comment=>comment.id !== id);
        setCommentList(change);
    }

    const commentLi = commentList.map((item, index)=>{
        return (
            <>
                <li key={index}><span>{item.id}</span><button onClick={()=>onDeleteComment(item.id)}>삭제</button></li>
                
            </>
        )
    });


   const boardList = boardFilter.map((item, index)=>{
    
        return (
            
            <li key={index}>
                <h3>{item.subject}</h3>
                <p>{item.content}</p>
                <button onClick={()=>onDelete(item.subject)}>삭제</button>
                <br/>
                <textarea name="comment" id="" placeholder="댓글 작성" value={comment} onChange={onChangeComment}></textarea><br/>
                <button onClick={onComment}>댓글 달기</button>
                <ul>
                    {commentLi}
                </ul>
            </li>
        );
    });
 
    

    return(
        <>
            <h1>게시판</h1>
            <input type="text" placeholder="제목" name="subject" onChange={onChangeHandler} value={subject} /><br/>
            <textarea name="content" id="" placeholder="내용" onChange={onChangeHandler2} value={content}></textarea><br/>
            <button onClick={onClickHandler}>게시</button><br/>
            <input type="text" placeholder="검색" name="search" onChange={onSearchHandler}/>
            <ul>
                {boardList}
            </ul>
        </>
    );
} 

