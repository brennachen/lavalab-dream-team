import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import StudentHome from "./StudentHome/StudentHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/studentHome" element={<StudentHome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
