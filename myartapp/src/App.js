import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import PostArt from "./screens/PostArt";
import Category from "./screens/Category";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/postart" element={<PostArt/>} />
          <Route path="/category" element={<Category/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
