import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

const colors = ['#F87171', '#60A5FA', '#34D399', '#FBBF24', '#A78BFA', '#F472B6'];

const ProjectForm = ({ projectToEdit, onClose }) => {
  const { addProject, updateProject } = useAppContext();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    if (projectToEdit) {
      setName(projectToEdit.name);
      setDescription(projectToEdit.description);
      setColor(projectToEdit.color);
    }
  }, [projectToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const projectData = { name, description, color };
    if (projectToEdit) {
      updateProject({ ...projectData, id: projectToEdit.id });
    } else {
      addProject(projectData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title">{projectToEdit ? 'Edit Project' : 'New Project'}</h2>
      <div className="form-group">
        <label htmlFor="projectName" className="form-label">Project Name</label>
        <input id="projectName" type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="projectDescription" className="form-label">Description</label>
        <textarea id="projectDescription" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="form-textarea"></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Color</label>
        <div className="form-color-selector">
          {colors.map(c => (
            <button key={c} type="button" onClick={() => setColor(c)} className={`form-color-button ${color === c ? 'selected' : ''}`} style={{ backgroundColor: c }}></button>
          ))}
        </div>
      </div>
      <div className="form-actions">
        <button type="button" onClick={onClose} className="button button-secondary">Cancel</button>
        <button type="submit" className="button button-primary">{projectToEdit ? 'Save Changes' : 'Create Project'}</button>
      </div>
    </form>
  );
};

export default ProjectForm;