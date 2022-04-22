import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Home from './pages/Home';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addUser" element={<AddUser/>}/>
        <Route exact path="/editUser/:id" element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
