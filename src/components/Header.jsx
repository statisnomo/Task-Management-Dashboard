import React, { useState } from 'react';
import { PlusIcon, SearchIcon } from './Icons';
import Modal from './Modal';
import TaskForm from './TaskForm';
import { useAppContext } from '../contexts/AppContext';

const Header = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  
  // Get searchTerm and setSearchTerm from the context
  const { activeProjectId, projects, searchTerm, setSearchTerm } = useAppContext(); // <-- UPDATED
  
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
              value={searchTerm} // <-- Control the input with state
              onChange={(e) => setSearchTerm(e.target.value)} // <-- Update state on change
            />
          </div>
          {/* ... New Task Button ... */}
        </div>
      </header>
      <Modal isOpen={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)}>
        <TaskForm onClose={() => setIsTaskModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Header;