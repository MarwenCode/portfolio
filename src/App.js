import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import "./app.scss"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      
      
    </div>
  );
}

export default App;
