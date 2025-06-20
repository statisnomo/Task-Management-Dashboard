# React Task Management Dashboard

This is a comprehensive task management application built with React, Vite, and Tailwind CSS. It allows users to organize tasks within different projects using a clean, modern, and responsive interface.

## Features

-   **Project Management**: Create, edit, and delete projects, each with a unique name, description, and color identifier.
-   **Task Management**: Add, edit, and delete tasks within projects.
-   **Task Details**: Each task includes a title, description, priority (High, Medium, Low), status, assignee, and an optional due date.
-   **Interactive Kanban Board**: Visualize your workflow with "To Do", "In Progress", and "Done" columns.
-   **Drag & Drop**: Easily move tasks between status columns to update their progress.
-   **Data Persistence**: All your projects and tasks are saved in the browser's `localStorage`, so your data persists even after a page refresh.
-   **Responsive Design**: The application is fully responsive and works seamlessly on both desktop and mobile devices.
-   **Modern UI/UX**: Built with a focus on a clean user interface, intuitive interactions, and helpful states (e.g., empty states).

## Tech Stack

-   **Frontend**: [React](https://reactjs.org/) (with Hooks)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **State Management**: React Context API with `useReducer`
-   **Drag & Drop**: [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Unique IDs**: [uuid](https://www.npmjs.com/package/uuid)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/my-task-dashboard.git
    cd my-task-dashboard
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

## AI Tool Utilization

This project was developed with significant assistance from AI tools like ChatGPT. The AI was instrumental in:

-   **Boilerplate Generation**: Quickly scaffolding components like forms, modals, and layout elements.
-   **Complex Logic Implementation**: Assisting with the setup of `react-beautiful-dnd`, including the `onDragEnd` handler logic.
-   **State Management Design**: Formulating the `useReducer` logic and the structure for the `AppContext` to handle global state.
-   **Styling and Design**: Generating Tailwind CSS class combinations for a clean and responsive UI.
-   **Debugging**: Identifying and fixing issues related to state updates and component re-renders.