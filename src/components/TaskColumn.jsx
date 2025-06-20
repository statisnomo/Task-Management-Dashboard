import React, { useState } from 'react';
import TaskCard from './TaskCard';

const countClassMap = {
  'To Do': 'todo',
  'In Progress': 'inprogress',
  'Done': 'done',
}

const TaskColumn = ({ title, tasks, onDrop, onDragOver }) => {
  const [isOver, setIsOver] = useState(false);
  
  return (
    <div
      onDrop={(e) => {
        onDrop(e, title);
        setIsOver(false);
      }}
      onDragOver={(e) => {
        onDragOver(e);
        setIsOver(true);
      }}
      onDragLeave={() => setIsOver(false)}
      className={`task-column ${isOver ? 'task-column--drag-over' : ''}`}
    >
      <h3 className="task-column__header">
        {title}
        <span className={`task-column__count task-column__count--${countClassMap[title]}`}>{tasks.length}</span>
      </h3>
      <div className="task-column__tasks">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {tasks.length === 0 && !isOver && (
            <div className="task-column__empty">
                <p>Drag tasks here</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default TaskColumn;