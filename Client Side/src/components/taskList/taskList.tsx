import React, { FC, useEffect, useState } from 'react';
import { Project, Task } from '../../models/types';
import { useParams } from 'react-router-dom';
import TaskItem from '../taskItem/taskItem';

interface TaskListProps {

}

const TaskList: FC<TaskListProps> = () => {

  const { projectId } = useParams<{ projectId: string }>();
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Define project scope', projectId: 1, completed: false },
    { id: 2, title: 'Create project plan', projectId: 1, completed: false },
    { id: 3, title: 'Assemble project team', projectId: 1, completed: false },
    { id: 4, title: 'Conduct market research', projectId: 2, completed: false },
    { id: 5, title: 'Develop marketing strategy', projectId: 2, completed: false },
    { id: 6, title: 'Launch marketing campaign', projectId: 2, completed: false },
    { id: 7, title: 'Design UI mockups', projectId: 3, completed: false },
    { id: 8, title: 'Develop frontend code', projectId: 3, completed: false },
    { id: 9, title: 'Integrate with backend', projectId: 3, completed: false },
    { id: 10, title: 'Write project proposal', projectId: 4, completed: false },
    { id: 11, title: 'Get project approval', projectId: 4, completed: false },
    { id: 12, title: 'Kick-off meeting with stakeholders', projectId: 4, completed: false },
    { id: 13, title: 'Identify key risks', projectId: 5, completed: false },
    { id: 14, title: 'Develop risk mitigation plan', projectId: 5, completed: false },
    { id: 15, title: 'Monitor risks continuously', projectId: 5, completed: false },
    { id: 16, title: 'Gather customer requirements', projectId: 6, completed: false },
    { id: 17, title: 'Translate requirements into specs', projectId: 6, completed: false },
    { id: 18, title: 'Review specs with the team', projectId: 6, completed: false },
    { id: 19, title: 'Plan sprint schedule', projectId: 7, completed: false },
    { id: 20, title: 'Assign tasks to team members', projectId: 7, completed: false },
    { id: 21, title: 'Conduct daily stand-ups', projectId: 7, completed: false },
  ]);

  const projectTasks = tasks
  .filter(task => task.projectId === Number(projectId))
  .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

const addTask = (task: Task) => {
  setTasks([...tasks, task]);
};

const handleAddTask = () => {
  const newTask: Task = {
    id: tasks.length + 1,
    title: newTaskTitle,
    projectId: Number(projectId),
    completed: false,
  };
  addTask(newTask);
  setNewTaskTitle('');
};

const handleCompleteTask = (taskId: number) => {
  const updatedTasks = tasks.map(task =>
    task.id === taskId ? { ...task, completed: true } : task
  );
  setTasks(updatedTasks);
};

  return  <div className="taskList">
  <div className="row mt-3">
    <div className="col-md-12">
      <h3>Tasks for Project {projectId}</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    {projectTasks.map(task => (
      <div key={task.id} className="col-md-4">
        <TaskItem
          task={task}
          onComplete={() => handleCompleteTask(task.id)}
        />
      </div>
    ))}
  </div>
</div>
}
export default TaskList;
