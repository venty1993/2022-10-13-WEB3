import logo from './logo.svg';
import './App.css';

function App() {


  const now = new Date();
  const 내용 = `밥먹기`;

  return (
    <div className="app">
      <h1>TO-DO-LIST</h1>
      <div className="input-container"><input type="text" id="input-text" /><button id="create-task">추가</button></div>

      <h2 className="task-header">할일목록</h2>
      <div id="task-list">
        <div className="task">
            <input type="checkbox" name="" id="" />
            <p>할일내용</p>
            <span className="make-time">2000-20-20</span>
            <div className="delete">삭제</div>
        </div>

      </div>
        <h2 className="task-header">
            완료됨
        </h2>
        <div id="task-complate">
            <div className="task">
                <input type="checkbox" name="" id="" checked/>
                <p>할일내용</p>
                <div className="delete">삭제</div>
        </div>
     </div>
    </div>
  );
}

export default App;
