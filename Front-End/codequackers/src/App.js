
import {Routes,Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Profile  from './pages/profile/Profile';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import Login from './pages/login/Login'
import Post from './components/Post'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
