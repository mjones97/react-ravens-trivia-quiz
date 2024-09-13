import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:teamId" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
