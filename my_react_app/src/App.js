import React from "react";
import Home from "./component/Home/home";
import AuthPage from "./component/Authentication/Auth";
import Overview from './component/Dashboard/Overview';
import {HashRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/dashboard" element={<Overview />}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
