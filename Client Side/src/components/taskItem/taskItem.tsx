import React, { FC } from 'react';
import './taskItem.styled.scss'
import { Task } from '../../models/types';
interface TaskItemProps {
  task: Task;
  onComplete: () => void;

}

const TaskItem: FC<TaskItemProps> = ({ task, onComplete }) => {



  return <div className="taskItem card mt-2">
    <div className="card-body">
      <h5 className="card-title">{task.title}</h5>
      {!task.completed &&
        <button className="btn btn-primary" onClick={onComplete}>
          {task.completed ? 'Completed' : 'Complete Task'}
        </button>
      }
    </div>
  </div>
}
export default TaskItem;
