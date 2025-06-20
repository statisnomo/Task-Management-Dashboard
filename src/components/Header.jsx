import React, { useState } from 'react';
import { PlusIcon, SearchIcon } from './Icons';
import Modal from './Modal';
import TaskForm from './TaskForm';
import { useAppContext } from '../contexts/AppContext';

const Header = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  // Get all necessary values from the context, including for the search bar
  const { activeProjectId, projects, searchTerm, setSearchTerm } = useAppContext();
  
  const activeProject = projects.find(p => p.id === activeProjectId);

  return (
    <>
      <header className="header">
        <div>
          <h1 className="header__title">
            {activeProject ? activeProject.name : "Dashboard"}
          </h1>
          <p className="header__description">
            {activeProject ? activeProject.description : "Select a project"}
          </p>
        </div>

        <div className="header__actions">

          <div className="header__search-wrapper">
            <span className="header__search-icon"><SearchIcon /></span>
            <input
              type="text"
              placeholder="Search tasks..."
              className="header__search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            onClick={() => setIsTaskModalOpen(true)}
            disabled={!activeProjectId}
            className="button button-primary"
            style={{display: 'flex', alignItems: 'center', gap: '8px'}}
          >
            <PlusIcon />
            New Task
          </button>

        </div>
      </header>

      <Modal isOpen={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)}>
        <TaskForm onClose={() => setIsTaskModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Header;
