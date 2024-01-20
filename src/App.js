import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Getpass from "./components/Getpass";

function App() {
  return (
    <>
      <Router>
        <AppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Getpass" element={<Getpass />} />        
        </Routes>
      </Router>
    </>
  );
}

export default App;

