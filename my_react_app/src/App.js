import React from "react";
import Home from "./component/TaskInput";
import AuthPage from "./component/Auth";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
