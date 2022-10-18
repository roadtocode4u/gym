import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Membership from './components/Membership/Membership';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
