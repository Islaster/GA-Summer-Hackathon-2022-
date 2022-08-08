import logo from './logo.svg';
import {Routes,Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Profile  from './pages/Profile';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
