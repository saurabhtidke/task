import "./App.css";
import { Login } from "./Componants/Login";
import { Navbar } from "./Componants/Navbar";
import { Register } from "./Componants/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        {/* Routing componants and paths */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
