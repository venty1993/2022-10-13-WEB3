import logo from './logo.svg';
import './App.css';
import Contents from './Contents';



function App() {
  return (
    <div className="App">
      <h1>my note</h1>

      <Contents 제목="여기는제목1" 내용="여기는 내용1"/>
      <Contents 제목="여기는제목2" 내용="여기는 내용2"/>
      <Contents 제목="여기는제목3" 내용="여기는 내용3"/>
      <Contents 제목="여기는제목4" 내용="여기는 내용4"/>
    </div>
  );
}

export default App;
