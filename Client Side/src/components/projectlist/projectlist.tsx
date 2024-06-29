import React, { FC, useEffect, useMemo, useState } from 'react';
import ProjectItem from '../projectItem/projectItem';
import './projectlist.styled.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Project, Task } from '../../models/types';
import TaskForm from '../taskForm/taskForm';
import { StatusEnum } from '../../models/enumType';
import { Button, Modal } from 'react-bootstrap';

interface ProjectlistProps {
  projects: Project[];
  setProjects: (projects: Project) => void; // תיקון כאן
  markProjectAsCompleted: (id: number) => void;
  editingProject: (project: Project | null) => void;
  handleCancelEdit: () => void;


}

const Projectlist: FC<ProjectlistProps> = ({ projects, setProjects, markProjectAsCompleted, editingProject, handleCancelEdit }) => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);



  const handleFormSubmit = (project: Project) => {
    setProjects(project);
    setCurrentProject(null);
    setShowForm(false);
  };

  const handleAddProject = () => {
    const newProject: Project = {
      id: projects.length + 1,
      new: true,
      name: '',
      description: '',
      status: StatusEnum.New,
      completed: false,
      tasks: [],
      someDate: new Date(),
    };
    setCurrentProject(newProject);
    setShowForm(true);
  };


  return  <div className="projectList row">
      <div className='row col-sm-4'>
        <Button className='btn mt-2' onClick={handleAddProject}>Add Project</Button>
      </div>
      <Modal show={showForm} onHide={() => { handleCancelEdit(); setShowForm(false); }}>
        <Modal.Header closeButton>
          <Modal.Title>{currentProject?.new ? 'Add New Project' : 'Edit Project'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentProject && (
            <TaskForm
              project={currentProject}
              updateProject={handleFormSubmit}
              setEditingProject={setCurrentProject}
              onCancel={() => { handleCancelEdit(); setShowForm(false); }}
            />
          )}
        </Modal.Body>
      </Modal>
      {projects.map(project => (
        <div key={project.id} className="col-md-4">
          <ProjectItem
            project={project}
            onDelete={() => markProjectAsCompleted(project.id)}
            onUpdate={() => {
              setCurrentProject(project);
              setShowForm(true);
            }}
            setEditingProject={() => setCurrentProject(project)}
          />
        </div>
      ))}
      <h1 className='blur col-sm-3'>Completed Project</h1>
    </div>
}

export default Projectlist;
