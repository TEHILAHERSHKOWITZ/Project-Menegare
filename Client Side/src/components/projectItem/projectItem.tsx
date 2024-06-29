import React, { FC, useState } from 'react';
import './projectItem.styled.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Project } from '../../models/types';
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'; 
import { StatusEnum } from '../../models/enumType';

interface ProjectItemProps {
  project: Project;
  onDelete: () => void;
  onUpdate: () => void;
  setEditingProject: (project: Project) => void;
}

const ProjectItem: FC<ProjectItemProps> = ({project,onDelete,onUpdate,setEditingProject}) => {

  const handleEditClick = () => {
    setEditingProject(project);
    onUpdate();
  };
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const getStatusText = (status: StatusEnum) => {
    switch (status) {
      case StatusEnum.New:
        return "New";
      case StatusEnum.Active:
        return "Active";
      case StatusEnum.Resolved:
        return "Resolved";
      default:
        return "";
    }
  };

  
   return     <div className="projectItem card custom-card">
   <Link to={`/tasks/${project.id}`} className="btn">
     <div className="card-body">
       <h5 className="card-title">{project.name}</h5>
       <p className="card-text">{project.description}</p>
       <p className="card-text">Status: {getStatusText(project.status)}</p>
       <p className="card-text">Date: {formatDate(project.someDate)}</p>
     </div>
   </Link>
   {!project.completed && (
     <div className="card-buttons">
       <Button className='btn btn-dark' variant="warning" onClick={handleEditClick}>Edit</Button>
       <Button variant="danger" onClick={onDelete}>Complete</Button>
     </div>
   )}
 </div>
 }

export default ProjectItem;



