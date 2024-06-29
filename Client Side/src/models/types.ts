import { StatusEnum } from "./enumType";

export interface Task {
    id: number;
    title: string;
    projectId:number;
    completed: boolean;
  }
  
  export interface Project {
    id: number;
    new:boolean;
    name: string;
    description: string;
    status: StatusEnum;
    completed:boolean;
    tasks: Task[];
    someDate: any;
    }
 
  