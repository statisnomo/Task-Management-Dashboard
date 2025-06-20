import React, { createContext, useContext, useReducer, useEffect } from 'react';

const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
const AppContext = createContext();

const initialState = {
  projects: [],
  tasks: [],
  activeProjectId: null,
  searchTerm: '', 
};

// No changes needed in the reducer itself
const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'UPDATE_PROJECT':
      return { ...state, projects: state.projects.map(p => p.id === action.payload.id ? action.payload : p), };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter(p => p.id !== action.payload),
        tasks: state.tasks.filter(t => t.projectId !== action.payload),
        activeProjectId: state.activeProjectId === action.payload ? null : state.activeProjectId,
      };
    case 'SET_ACTIVE_PROJECT':
      return { ...state, activeProjectId: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK':
      return { ...state, tasks: state.tasks.map(t => t.id === action.payload.id ? action.payload : t), };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload) };
    case 'UPDATE_TASK_STATUS': {
      const { taskId, newStatus } = action.payload;
      return { ...state, tasks: state.tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task), };
    }
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, (initial) => {
    let persistedState;
    try {
      persistedState = JSON.parse(localStorage.getItem('taskMasterData'));
    } catch (error) {
      console.error("Error parsing localStorage data", error);
      persistedState = null;
    }
    // **THE ROBUST FIX:**
    // We create the final initial state by merging our default `initialState`
    // with any data we successfully loaded from localStorage.
    // The order is important: properties from `persistedState` will
    // overwrite the defaults, but any missing properties (like searchTerm)
    // will be kept from `initialState`.
    return { ...initial, ...persistedState };
  });

  useEffect(() => {
    const stateToSave = {
      projects: state.projects,
      tasks: state.tasks,
      activeProjectId: state.activeProjectId,
    };
    localStorage.setItem('taskMasterData', JSON.stringify(stateToSave));
  }, [state]);
  
  // Helper functions are unchanged
  const addProject = (project) => dispatch({ type: 'ADD_PROJECT', payload: { ...project, id: generateId() } });
  const updateProject = (project) => dispatch({ type: 'UPDATE_PROJECT', payload: project });
  const deleteProject = (id) => dispatch({ type: 'DELETE_PROJECT', payload: id });
  const setActiveProject = (id) => dispatch({ type: 'SET_ACTIVE_PROJECT', payload: id });
  const addTask = (task) => dispatch({ type: 'ADD_TASK', payload: { ...task, id: generateId(), createdAt: new Date().toISOString() } });
  const updateTask = (task) => dispatch({ type: 'UPDATE_TASK', payload: task });
  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', payload: id });
  const updateTaskStatus = (taskId, newStatus) => dispatch({ type: 'UPDATE_TASK_STATUS', payload: { taskId, newStatus } });
  const setSearchTerm = (term) => dispatch({ type: 'SET_SEARCH_TERM', payload: term });

  const value = { ...state, addProject, updateProject, deleteProject, setActiveProject, addTask, updateTask, deleteTask, updateTaskStatus, setSearchTerm };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);