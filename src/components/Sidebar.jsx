import React, { useState } from 'react';
import { PlusIcon, EditIcon, TrashIcon } from './Icons';
import { useAppContext } from '../contexts/AppContext';
import Modal from './Modal';
import ProjectForm from './ProjectForm';

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const { projects, activeProjectId, setActiveProject, deleteProject } = useAppContext();

  const handleEditProject = (project, e) => {
    e.stopPropagation(); // Prevent project selection when clicking edit
    setEditingProject(project);
    setIsModalOpen(true);
  };
  
  const handleDeleteProject = (id, e) => {
    e.stopPropagation();
    deleteProject(id);
  }

  const handleAddNewProject = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__header">
          <h2 className="sidebar__title">Projects</h2>
        </div>
        <nav className="sidebar__nav">
          {projects.map((project) => (
            <div key={project.id} className="sidebar__project-item">
              <button
                onClick={() => setActiveProject(project.id)}
                className={`sidebar__project-button ${activeProjectId === project.id ? 'active' : ''}`}
              >
                <span className="sidebar__project-color" style={{ backgroundColor: project.color }}></span>
                <span className="sidebar__project-name">{project.name}</span>
              </button>
              <div className="sidebar__project-actions">
                <button onClick={(e) => handleEditProject(project, e)}><EditIcon /></button>
                <button onClick={(e) => handleDeleteProject(project.id, e)}><TrashIcon /></button>
              </div>
            </div>
          ))}
        </nav>
        <div className="sidebar__footer">
          <button
            onClick={handleAddNewProject}
            className="button button-primary"
            style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <PlusIcon />
            New Project
          </button>
        </div>
      </aside>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectForm
          projectToEdit={editingProject}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
};

export default Sidebar;