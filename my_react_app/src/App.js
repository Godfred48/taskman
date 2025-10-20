import React from "react";
import Home from "./component/Home/home";
import AuthPage from "./component/Authentication/Auth";
import Overview from './component/Dashboard/Overview';
import TaskInput from './component/Dashboard/TaskInput';
import TaskItem from "./component/Dashboard/TaskItem";
import Setting from "./component/Settings/settings";
import {HashRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/dashboard" element={<Overview />}/>
          <Route path="/addtask" element={<TaskInput />} />
          <Route path="/taskitem" element={<TaskItem/>}/>
          <Route path="/settings" element={<Setting/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
