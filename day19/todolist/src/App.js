import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js'
import {useState} from 'react';

function App() {

  const [taskList,setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function makeTask() {
    setTaskList(taskList.concat(<Task 할일={inputValue}></Task>))
    setInputValue('');
  }


  return (
    <div className="App">
        <h1>TO-DO-LIST</h1>
        <div className="input-container">
        <input type="text" id="input-text" value={inputValue} onChange={(e)=>{
          setInputValue(e.target.value)
        }}/>
        <button id="create-task" onClick={makeTask}>
          추가
          </button>
        </div>

        <h2 className="task-header">할일목록</h2>
        <div id="task-list">
          {taskList}
        </div>
        <h2 className="task-header">
            완료됨
        </h2>
        <div id="task-complate">
            <div className="task">
                <input type="checkbox" name="" id="" checked />
                <p>할일내용</p>
                <div className="delete">삭제</div>
        </div>
     </div>
    </div>
  );
}

export default App;
