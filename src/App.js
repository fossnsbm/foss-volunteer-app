import "./App.scss";
import Navbar from "./App/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./App/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
      </div>
    </Router>
  );
}

export default App;
