import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import LogIn from "./SignUp/LogIn"
import GeneralSignUp from './SignUp/GeneralSignUp';
import StudentSignUp from './SignUp/StudentSignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<GeneralSignUp />}></Route>
          <Route path="/studentsignup" element={<StudentSignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
