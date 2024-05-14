import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Datadispay from './Pages/Datadispay';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/users' element={<Datadispay></Datadispay>}/>
    </Routes>
    </>
  );
}

export default App;
