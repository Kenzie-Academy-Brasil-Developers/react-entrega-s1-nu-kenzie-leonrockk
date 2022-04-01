import logo from "./logo.svg";

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/profile/profile";
import HomePage from "./pages/home/home";


function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/profile" exact element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
