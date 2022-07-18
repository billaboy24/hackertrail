import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import List from "./components/List";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import Update from "./components/Update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="containerfluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<List />} exact />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
