import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { StatusEnum } from '../../models/enumType';
import './dashboard.styled.scss';
import { RootState } from '../../redux/store';

interface DashboardProps {

}

const Dashboard: FC<DashboardProps> = () => {

   const projects = useSelector((state: RootState) => state.projects.projects);

   const completedProjects = projects.filter(project => project.completed).length;
   const notStartedProjects = projects.filter(project => project.status === StatusEnum.New).length;
   const activeProjects = projects.filter(project => project.status === StatusEnum.Active).length;


   return     <div className="dashBoard">
   <h1 className="title">My Pace in the Progress of the Projects</h1>
   <div className="dashboard">
     <div className="card">
       <h2>Completed Projects</h2>
       <p>{completedProjects}</p>
     </div>
     <div className="card">
       <h2>Not Started Projects</h2>
       <p>{notStartedProjects}</p>
     </div>
     <div className="card">
       <h2>Active Projects</h2>
       <p>{activeProjects}</p>
     </div>
   </div>
 </div>

 
}

export default Dashboard;
