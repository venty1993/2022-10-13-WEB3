import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js'

function App() {
  return (
    <div className="App">
        <h1>TO-DO-LIST</h1>
        <div className="input-container"><input type="text" id="input-text" /><button id="create-task" onClick={makeTask}>추가</button></div>

        <h2 className="task-header">할일목록</h2>
        <div id="task-list">
            <Task 할일="밥먹기"></Task>
            <Task 할일="놀기"></Task>
            <Task 할일="게임하기"></Task>
            <Task 할일="간식먹기"></Task>
            <Task 할일="유튜브보기"></Task>

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
