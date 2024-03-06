import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ChatGPT from './components/tryModel/ChatGPT';

function App() {

 
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ChatGPT' element={<ChatGPT/>}/>
      </Routes>
  </Router>
  );
}

export default App;
