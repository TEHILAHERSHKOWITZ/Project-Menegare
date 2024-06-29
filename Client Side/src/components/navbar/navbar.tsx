import React, { FC } from 'react';
import './navbar.styled.scss';
import { Link, Outlet, Route, Router, Routes } from 'react-router-dom';
import ProjectMenegare from '../projectMenegare/projectMenegare';
import TaskList from '../taskList/taskList';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {

   return  <div >
   <div className="navbar-container">
     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
       <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item ">
               <Link className="nav-link" to="/dashboard">Dashboard</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/projectdetails">Project Details</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/">My Projects</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/notification">Notification</Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   </div>
   <div className="content">
     <Outlet />
   </div>
 </div>
}

export default Navbar;
