import "./App.scss";
import "antd/dist/antd.css";
import Navbar from "./App/Navbar/Navbar";
import Footer from "./App/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./App/Header/Header";
import About from "./App/About/About";
import FAQ from "./App/FAQ/FAQ";
import FooterCTA from "./App/FooterCTA/FooterCTA";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <FAQ />
        <FooterCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
