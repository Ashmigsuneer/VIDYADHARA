import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReaderSelection from "./pages/ReaderSelection";
import StudentPage from "./pages/StudentPage";
import Login from "./pages/Login";
import MainStudentPage from "./pages/MainStudentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reader-selection" element={<ReaderSelection />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-main" element={<MainStudentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
