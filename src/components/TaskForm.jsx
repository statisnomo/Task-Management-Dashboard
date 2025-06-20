import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

const TaskForm = ({ taskToEdit, onClose }) => {
  const { addTask, updateTask, activeProjectId } = useAppContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('To Do');
  const [assignee, setAssignee] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setStatus(taskToEdit.status);
      setAssignee(taskToEdit.assignee);
      setDueDate(taskToEdit.dueDate ? taskToEdit.dueDate.split('T')[0] : '');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !assignee.trim()) return;

    const taskData = { title, description, priority, status, assignee, dueDate, projectId: activeProjectId };
    if (taskToEdit) {
      updateTask({ ...taskData, id: taskToEdit.id, createdAt: taskToEdit.createdAt });
    } else {
      addTask(taskData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title">{taskToEdit ? 'Edit Task' : 'New Task'}</h2>
      
      <div className="form-group">
        <label htmlFor="taskTitle" className="form-label">Title</label>
        <input id="taskTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-input" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="taskDescription" className="form-label">Description</label>
        <textarea id="taskDescription" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="form-textarea"></textarea>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="taskPriority" className="form-label">Priority</label>
          <select id="taskPriority" value={priority} onChange={(e) => setPriority(e.target.value)} className="form-select">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="taskStatus" className="form-label">Status</label>
          <select id="taskStatus" value={status} onChange={(e) => setStatus(e.target.value)} className="form-select">
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="taskAssignee" className="form-label">Assignee</label>
          <input id="taskAssignee" type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="taskDueDate" className="form-label">Due Date</label>
          <input id="taskDueDate" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-input" />
        </div>
      </div>
      
      <div className="form-actions">
        <button type="button" onClick={onClose} className="button button-secondary">Cancel</button>
        <button type="submit" className="button button-primary">{taskToEdit ? 'Save Changes' : 'Create Task'}</button>
      </div>
    </form>
  );
};

export default TaskForm;