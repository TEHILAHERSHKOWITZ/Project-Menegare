import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import ProjectItem from './components/projectItem/projectItem';
import Projectlist from './components/projectlist/projectlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css'; // ייבוא ה-CSS של לוח השנה
import ProjectMenegare from './components/projectMenegare/projectMenegare';
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/taskList/taskList';
import ProjectDetails from './pages/projectDetails/projectDetails';
import Dashboard from './pages/dashboard/dashboard';
import Notification from './components/notification/notification';
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {

  return <div>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path='/projectdetails' element={<ProjectDetails />} />
          <Route path="/" element={<ProjectMenegare />} />
          <Route path="/tasks/:projectId" element={<TaskList />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/notification' element={<Notification />} />
        </Route>
      </Routes>
    </Provider>
  </div>
}



export default App;

