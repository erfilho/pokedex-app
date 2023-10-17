import "./App.css";
import Dashboard from "./pages/dashboard";
import Data from "./pages/dashboard/data";
import Location from "./pages/dashboard/location";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash/:id" element={<Dashboard />}>
          <Route path="data" element={<Data />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
