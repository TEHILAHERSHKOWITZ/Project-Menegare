import React, { FC, useMemo, useState } from 'react';
import './projectMenegare.styled.scss';
import { Project } from '../../models/types';
import Projectlist from '../projectlist/projectlist';
import Done from '../done/done';
import TaskForm from '../taskForm/taskForm';
import { Modal } from 'react-bootstrap';
import { addProject, markProjectAsCompleted, unmarkProjectAsCompleted, updateProject } from '../../redux/slices/projectSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
interface ProjectMenegareProps {}

 const ProjectMenegare: FC<ProjectMenegareProps> = () => {
  
  const projects = useSelector((state: RootState) => state.projects.projects);
  const dispatch = useDispatch<AppDispatch>();
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');


  const handleMarkProjectAsCompleted = (projectId: number) => {
    dispatch(markProjectAsCompleted(projectId));
  };

  const handleUpdateProject = (updatedProject: Project) => {
    dispatch(updateProject(updatedProject));
    setEditingProject(null);
  };

  const handleUnmarkProjectAsCompleted = (projectId: number) => {
    dispatch(unmarkProjectAsCompleted(projectId));
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
  };

  const handleAddProject = (newProject: Project) => {
    dispatch(addProject(newProject));
    setEditingProject(null);
  };
  
  const handleSetProject = (project: Project) => {
    if (project.new && project.id>projects.length) {
      handleAddProject(project);
    } else {
      handleUpdateProject(project);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [projects, searchTerm]);


  
   return  <div className='projectMenegare row'>
 <div className=" col-sm-4 search-bar-container">
        <input
          type="text"
          className="form-control mt-2  search-bar"
          placeholder="Search Project"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
   <Projectlist
     projects={filteredProjects.filter(project => !project.completed)}
     markProjectAsCompleted={handleMarkProjectAsCompleted}
     editingProject={setEditingProject}
     setProjects={handleSetProject}
     handleCancelEdit={handleCancelEdit}
   />
   <Done
     projects={filteredProjects.filter(project => project.completed)}
     unmarkProjectAsCompleted={handleUnmarkProjectAsCompleted}
     setEditingProject={setEditingProject}
     updateProject={handleUpdateProject}
     handleCancelEdit={handleCancelEdit}
   />
   {editingProject && !editingProject.completed && (
     <Modal show={!!editingProject} onHide={handleCancelEdit}>
       <TaskForm
         project={editingProject}
         updateProject={handleUpdateProject}
         setEditingProject={setEditingProject}
         onCancel={handleCancelEdit}
       />
     </Modal>
   )}
 </div>
}
export default ProjectMenegare;
