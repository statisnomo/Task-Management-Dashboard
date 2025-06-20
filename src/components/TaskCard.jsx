import React, { useState } from 'react';
import { EditIcon, TrashIcon, UserIcon, CalendarIcon, PriorityHighIcon, PriorityMediumIcon, PriorityLowIcon } from './Icons';
import { useAppContext } from '../contexts/AppContext';
import Modal from './Modal';
import TaskForm from './TaskForm';

const priorityIcons = {
  High: PriorityHighIcon,
  Medium: PriorityMediumIcon,
  Low: PriorityLowIcon,
};

const TaskCard = ({ task }) => {
  const { deleteTask } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const PriorityIcon = priorityIcons[task.priority];

  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
    setIsDragging(true);
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const cardClasses = `task-card ${isDragging ? 'task-card--dragging' : ''}`;

  return (
    <>
      <div
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className={cardClasses}
      >
        <div className="task-card__header">
          <p className="task-card__title">{task.title}</p>
          <div className="task-card__actions">
            <button onClick={() => setIsModalOpen(true)}><EditIcon /></button>
            <button onClick={() => deleteTask(task.id)} className="delete"><TrashIcon /></button>
          </div>
        </div>
        <p className="task-card__description">{task.description}</p>
        <div className="task-card__footer">
          <div className="task-card__meta">
            <div className={`task-card__meta-item task-card__priority--${task.priority}`} title={`Priority: ${task.priority}`}>
              {PriorityIcon && <PriorityIcon />}
            </div>
            <div className="task-card__meta-item" title={`Assignee: ${task.assignee}`}>
              <UserIcon />
              <span>{task.assignee}</span>
            </div>
          </div>
          {task.dueDate && (
            <div className="task-card__meta-item" title={`Due: ${task.dueDate}`}>
              <CalendarIcon />
              <span>{new Date(task.dueDate).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm taskToEdit={task} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default TaskCard;