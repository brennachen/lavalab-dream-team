import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
<<<<<<< HEAD
import LogIn from "./SignUp/LogIn"
import GeneralSignUp from './SignUp/GeneralSignUp';
import StudentSignUp from './SignUp/StudentSignUp';
=======
import StudentHome from "./StudentHome/StudentHome";
>>>>>>> d932d0a07a9c2a330f72b566612cb434b1594fce

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<GeneralSignUp />}></Route>
          <Route path="/studentsignup" element={<StudentSignUp />}></Route>
          <Route path="/studentHome" element={<StudentHome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
