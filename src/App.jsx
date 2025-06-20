import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskBoard from './components/TaskBoard';
import { useAppContext } from './contexts/AppContext';

import './App.css'; 

function App() {
  const { activeProjectId } = useAppContext();

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="main-content__page">
          {activeProjectId ? (
            <TaskBoard />
          ) : (
            <div className="empty-state">
              <div>
                <h2>Welcome to Your Task Dashboard</h2>
                <p>Select a project to view its tasks, or create a new one to get started.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;