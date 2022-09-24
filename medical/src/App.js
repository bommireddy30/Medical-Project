import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LogIn from "./Pages/Login/LogIn";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
