
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Question from './Components/Question';
import Sports from './Components/Sports';
import Birds from './Components/Birds';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/questions' element={<Question/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/birds' element={<Birds/>}/>

       </Routes>
       </header>
      
    </div>
  );
}

export default App;
