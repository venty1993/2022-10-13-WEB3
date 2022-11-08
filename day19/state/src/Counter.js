import React, {useState} from 'react'

function Counter() {

    const [count,setCount] = useState(0)

    return( 
    <div className="counter">
        <p>{count}</p>
        <button onClick={()=>{setCount(count + 1)}}>+1</button>
    </div>
    );
}

export default Counter;