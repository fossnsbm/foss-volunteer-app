import "./App.scss";
import Navbar from "./App/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./App/Header/Header";
import About from "./App/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <About />
      </div>
    </Router>
  );
}

export default App;
