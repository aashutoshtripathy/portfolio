import './App.css';
import Contact from './components/home/Contact';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from './components/home/Work';


function App() {
  return (
    // <Home/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/work" element={<Work/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
