import './App.css';
import Contact from './components/home/Contact';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from './components/home/Work';
import Login from './components/home/Login';
import Signup from './components/home/Signup';
import Hrhome from './components/hrproject/Hrhome';
import Hrview from './components/hrproject/Hrview';
import Hredit from './components/hrproject/Hredit';


function App() {
  return (
    // <Home/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/work" element={<Work/>}/>
    <Route path='/hrhome' element={<Hrhome/>}/>
    <Route path='/hrview' element={<Hrview/>}/>
    <Route path='/hredit/:id' element={<Hredit/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;