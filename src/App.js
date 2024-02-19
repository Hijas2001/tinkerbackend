import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
