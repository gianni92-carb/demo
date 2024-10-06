import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.jsx';
import Demo from './Demo.jsx';
import Demo2 from './Demo2.jsx';
import Demo3 from './Demo3.jsx';

function App() {
  return (
    <div className="App">
        Hello!!!
        <Demo name={"ARRAY"}/>
        <Demo2 name={"OBJECT"}/>
        <Demo3 name={"USE STATE"}/>
    </div>
  );
}

export default App;
