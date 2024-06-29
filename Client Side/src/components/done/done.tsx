import React, { FC, useState } from 'react';
import './done.styled.scss';
import { Project } from '../../models/types';
import ProjectItem from '../projectItem/projectItem';
interface DoneProps {

  projects: Project[];
  unmarkProjectAsCompleted: (id: number) => void;
  setEditingProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  handleCancelEdit: () => void;
}

const Done: FC<DoneProps> = ({projects, unmarkProjectAsCompleted,setEditingProject,updateProject,handleCancelEdit}) =>{



return <div>
{projects.map((project) => (
  <ProjectItem
  project={project}
  onDelete={() => unmarkProjectAsCompleted(project.id)}
  onUpdate={() => {
    setEditingProject(project);
    updateProject(project);
  }}
  setEditingProject={() => setEditingProject(project)}

  />
))}
</div>

}

export default Done;
