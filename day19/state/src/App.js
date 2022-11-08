import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js'
import {useState} from 'react';

function App() {

  const [counter,setCounter] = useState([<Counter></Counter>])

  return (
    <div className="App">
      <button onClick={()=>{
        setCounter(counter.concat(<Counter></Counter>))
        console.log(counter);
      }}>카운터 자체를 추가하는 버튼</button>

      변경되었나?
      {counter}
    </div>
  );
}

export default App;
