import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
