import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import ProjectShow from "./Routes/ProjectShow";
import Project01 from "./Routes/Project-1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projectshow" element={<ProjectShow />}></Route>
        <Route path="/project01" element={<Project01 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
