import { useState } from "react";

// 전체
export const BoardContainer = () => {
    
    const [board, setBoard] = useState([]);
    const [boardFilter, setBoardFilter] = useState([]);
    
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

  
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



    return(
        <>
            <h1>게시판</h1>
            <input type="text" placeholder="제목" name="subject" onChange={onChangeHandler} value={subject} /><br/>
            <textarea name="content" id="" placeholder="내용" onChange={onChangeHandler2} value={content}></textarea><br/>
            <button onClick={onClickHandler}>게시</button><br/>
            <input type="text" placeholder="검색" name="search" onChange={onSearchHandler}/>
            <ul>
                {
                    boardFilter.map((item, index)=>{
                        return (
                            <Board key={index} item={item} onDelete={onDelete}/>
                        );
                    })
                }
            </ul>
        </>
    );
} 


// 글 리스트
const Board = ({item, onDelete}) => {
    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState([]);


    const onChangeComment = e => {
        setComment(e.target.value);
        
    }

    const onComment = () => {
        setCommentList([...commentList, {id:comment}])
        setComment("");
    }

    const onDeleteComment = id => {
        const change = commentList.filter(comment=>comment.id !== id);
        setCommentList(change);
    }

   

    return(
        <li>
            <h3>{item.subject}</h3>
            <p>{item.content}</p>
            <button onClick={()=>onDelete(item.subject)}>삭제</button>
            <br/>
            <textarea name="comment" id="" placeholder="댓글 작성" value={comment} onChange={onChangeComment}></textarea><br/>
            <button onClick={onComment}>댓글 달기</button>
            <ul>
                {
                    commentList.map((item, index)=>{
                        return (
                            <>
                                <Comment key={index} item={item} onDeleteComment={onDeleteComment}/>
                            </>
                        )
                    })
                }
            </ul>
        </li>
    )
}



// 코멘트 리스트
const Comment = ({item, onDeleteComment}) => {
    return (
        <li><span>{item.id}</span><button onClick={()=>onDeleteComment(item.id)}>삭제</button></li>
    );
}