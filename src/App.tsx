import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
const App = () => {
  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-100">

      <Router>
      <nav className="flex gap-[2rem]">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </Router>
    </main>
  );
}

export default App;
