import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StatusEnum } from "../../models/enumType";
import { Project } from "../../models/types";

interface ProjectState {
    projects: Project[];

  }
  const initialState: ProjectState = {
    projects: [
        {
            id: 1,
            new:false,
            name: 'react',
            description: "United States",
            status:StatusEnum.Active,
            completed:false,
            tasks: [
              { id: 1, title: 'do to',projectId: 1, completed: false },
              { id: 2, title: 'another task',projectId: 1, completed: true },
            ],
             someDate:new Date(2024, 5, 15)
          },
          {
            id: 2,
            new:false,
            name: 'node.js',
            description: "United States",
            status: StatusEnum.Active,
            completed:false,
            tasks: [
              { id: 1, title: 'setup server',projectId: 2, completed: true },
              { id: 2, title: 'create routes', projectId: 2,completed: false },
            ],
            someDate:new Date(2024, 5, 15)
          },
          {
            id: 3,
            new:false,
            name: 'c#',
            description: "United States",
            status:StatusEnum.Active,
            completed:false,
            tasks: [
              { id: 1, title: 'learn syntax',projectId: 3, completed: false },
              { id: 2, title: 'build application',projectId: 3, completed: true },
            ],
            someDate:new Date(2024, 5, 15)
          },
          {
            id: 4,
            new:false,
            name: 'mongodb',
            description: "United States",
            status: StatusEnum.Active,
            completed:false,
            tasks: [
              { id: 1, title: 'setup database', projectId: 4, completed: true },
              { id: 2, title: 'design schema',projectId: 4, completed: false },
            ],
            someDate:new Date(2024, 5, 15)
          },
          {
            id: 5,
            new:false,
            name: 'angular',
            description: "United States",
            status: StatusEnum.Active,
            completed:false,
            tasks: [
              { id: 1, title: 'create components',projectId: 5, completed: false },
              { id: 2, title: 'implement data binding',projectId: 5, completed: true },
            ],
            someDate:new Date(2024, 5, 15)
          },
          {
            id: 6,
            new:false,
            name: 'c++',
            description: "United States",
            status: StatusEnum.Active,
            completed:false,
            tasks: [
              { id: 1, title: 'understand pointers',projectId: 6, completed: true },
              { id: 2, title: 'work with classes', projectId: 6,completed: false },
            ],
            someDate:new Date(2024, 5, 15)
          },
          {
            id: 7,
            new:false,
            name: 'Ai',
            description: "United States",
            status: StatusEnum.Active,
            completed:false,
            tasks: [
              { id: 1, title: 'explore algorithms',projectId: 7, completed: false },
              { id: 2, title: 'train model',projectId: 7, completed: true },
            ],
             someDate:new Date(2024, 5, 15)
          },
    ],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<Project>) {
      state.projects.push(action.payload);
    },
    updateProject(state, action: PayloadAction<Project>) {
      const index = state.projects.findIndex(project => project.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...action.payload };
      }
    },

    markProjectAsCompleted(state, action: PayloadAction<number>) {
      const project = state.projects.find(project => project.id === action.payload);
      if (project) {
        project.completed = true;
        project.status=StatusEnum.Resolved
      }
    },
    unmarkProjectAsCompleted(state, action: PayloadAction<number>) {
      const project = state.projects.find(project => project.id === action.payload);
      if (project) {
        project.completed = false;
      }
    },
  },
});

export const { addProject, updateProject, markProjectAsCompleted, unmarkProjectAsCompleted } = projectSlice.actions;
export default projectSlice.reducer;