import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Volunteers from './components/Volunteers/Volunteers';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/volunteers' element={<Volunteers/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
