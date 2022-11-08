import React from 'react';

function Contents(props) {
    let 제목;
    if(props.제목==="여기는제목1"){
        제목="여기만바꾼다";
    }else {
        제목=props.제목;
    }
    return(
        <div className="contents">
            <h2 className="content-title">{제목}</h2>
            <p className="content">{props.내용}</p>
        </div>
    )
}

export default Contents;