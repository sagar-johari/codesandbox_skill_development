import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav className="bg-[#f00]">
          <Link to={"/"}>home</Link>
          <Link to={"/about"}>about</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
