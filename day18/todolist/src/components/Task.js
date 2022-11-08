import React from 'react'

function Task(props) {
    const now = new Date();

    return(
        <div className="task">
            <input type="checkbox" name="" id="" />
            <p>{props.할일}</p>
            <span className="make-time">{now.getFullYear()}-{now.getMonth()}-{now.getDate()}</span>
            <div className="delete">삭제</div>
        </div>
    )
}

export default Task;