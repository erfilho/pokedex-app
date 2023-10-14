import "./App.css";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
