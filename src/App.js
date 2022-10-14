import Books from "./Components/Books";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SingleBook from "./Components/SingleBook";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />}/> 
      <Route path="/" element={<Books />}/> 
      <Route path="/book/:id" element={<SingleBook />}/> 
      </Routes>
    </Router>
  );
}

export default App;
