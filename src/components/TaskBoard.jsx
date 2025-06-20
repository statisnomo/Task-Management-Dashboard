import React from 'react';
import TaskColumn from './TaskColumn';
import { useAppContext } from '../contexts/AppContext';

const TaskBoard = () => {
  const { tasks, activeProjectId, updateTaskStatus, searchTerm } = useAppContext();

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    if (taskId) {
      updateTaskStatus(taskId, status);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const projectTasks = tasks.filter(task => task.projectId === activeProjectId);
  
  const filteredTasks = projectTasks.filter(task => {
    // --- THIS IS THE FIX ---
    // We create a "safe" search term. If the original `searchTerm` is
    // undefined or null, we'll use an empty string '' instead.
    // This completely prevents the .trim() error.
    const safeSearchTerm = searchTerm || ''; 

    // Now, we use the safeSearchTerm for our logic.
    if (!safeSearchTerm.trim()) {
        return true; 
    }

    const term = safeSearchTerm.toLowerCase();

    return (
      task.title.toLowerCase().includes(term) ||
      task.description.toLowerCase().includes(term) ||
      task.assignee.toLowerCase().includes(term)
    );
  });

  const columns = {
    'To Do': filteredTasks.filter(task => task.status === 'To Do'),
    'In Progress': filteredTasks.filter(task => task.status === 'In Progress'),
    'Done': filteredTasks.filter(task => task.status === 'Done'),
  };

  return (
    <div className="task-board">
      {Object.entries(columns).map(([title, columnTasks]) => (
        <TaskColumn 
            key={title} 
            title={title} 
            tasks={columnTasks}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        />
      ))}
    </div>
  );
};

export default TaskBoard;