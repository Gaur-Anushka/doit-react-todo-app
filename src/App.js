import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Search from "./pages/Search";
import Widget from "./pages/Widget";
import Mode from "./pages/Mode";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar will be shown on all pages */}
        <Navbar />
        
        {/* Define routes here */}
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Widget" element={<Widget />} />
          <Route path="/Mode" element={<Mode />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
