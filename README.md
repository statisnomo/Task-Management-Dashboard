# React Task Management Dashboard

This is a comprehensive task management application built as a submission for the Students' Union Induction Task. The dashboard provides a clean, modern, and intuitive interface for organizing work across different projects and tracking progress visually.

This project was built from the ground up using **React and plain CSS, with zero external runtime dependencies**, to demonstrate core web development fundamentals and a mastery of browser-native APIs.

### [➡️ Live Demo ⬅️](https://your-deployment-link.vercel.app/)

*(Replace the link above with your actual deployment link from Vercel, Netlify, etc.)*

![Task Board Screenshot](./screenshot.png)
*(Suggestion: Take a screenshot of your running application, save it as `screenshot.png` in the project root, and this image will appear here.)*

---

## ✅ Core Features

This application meets all the core functional requirements of the task:

-   **Project Management**:
    -   Create, edit, and delete projects.
    -   Each project has a name, description, and a unique color identifier.
-   **Task Management**:
    -   Add, edit, and delete tasks within projects.
    -   Each task includes a title, description, priority level (High, Medium, Low), status, and an assignee name.
    -   Tasks can have an optional due date.
-   **Interactive Kanban Board**:
    -   A visual three-column layout: **To Do**, **In Progress**, and **Done**.
    -   **Drag-and-Drop functionality** to seamlessly move tasks between columns and update their status.
-   **Live Search**:
    -   A fully functional search bar to filter tasks in real-time across titles, descriptions, and assignees.
-   **Data Persistence**:
    -   All projects and tasks are saved in the browser's `localStorage`, ensuring your data persists after a page refresh or closing the tab.
-   **Responsive Design**:
    -   The layout is fully responsive and provides a seamless experience on both desktop and mobile devices.

---

## 🛠️ Tech Stack & Architectural Decisions

This project was built with a focus on simplicity, performance, and robustness, leading to specific architectural choices.

-   **[React](https://reactjs.org/)**: The core library for building the user interface using functional components and hooks.
    -   **`useState`**: For managing simple, local component state (like form inputs or modal visibility).
    -   **`useReducer` & `useContext`**: For robust global state management. The entire application state (projects, tasks, search term) is managed in a single, centralized store, making state transitions predictable and easy to debug.
-   **Plain CSS with CSS Variables**: Instead of a utility-first framework like Tailwind, plain CSS was chosen to eliminate build tool complexities and demonstrate strong foundational CSS skills. A consistent design system was implemented using CSS variables (`:root`) for colors, fonts, and spacing.
-   **HTML5 Drag and Drop API**: To fulfill the drag-and-drop requirement without external libraries, the native browser API (`draggable`, `onDragStart`, `onDrop`, etc.) was implemented. This choice results in a more lightweight and performant application.
-   **[Vite](https://vitejs.dev/)**: Used as the lightning-fast build tool and development server.
-   **No Runtime Dependencies**: Beyond React, this project intentionally uses no external libraries for its core functionality (no `uuid`, no `react-beautiful-dnd`, etc.) to keep the bundle size minimal and reduce potential points of failure.

---

## 🚀 Getting Started Locally

To run this project on your local machine, follow these steps:

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm (included with Node.js)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```

3.  **Install the necessary packages:**
    (This will only install React and Vite's development tools)
    ```sh
    npm install
    ```

4.  **Start the development server:**
    ```sh
    npm run dev
    ```

The application will now be running and accessible at `http://localhost:5173`.

---

## 🤖 AI Tool Utilization

AI tools (specifically ChatGPT) were used effectively throughout this project as a development partner, in line with the task's encouragement of AI assistance. The primary uses were:

-   **Boilerplate Generation**: Quickly scaffolding initial component structures, forms, and modals, which were then customized.
-   **Problem Solving & Debugging**:
    -   Diagnosing and resolving complex build tool configuration issues (e.g., the `postcss` and `vite.config.js` error loops).
    -   Identifying JavaScript runtime errors, such as the `Cannot read properties of undefined (reading 'trim')` crash, and suggesting robust solutions.
-   **Refactoring**: Assisting in the refactoring process from a library-based approach (like `react-beautiful-dnd`) to a native API-based solution (HTML5 Drag and Drop).
-   **CSS & SVG Generation**: Generating a clean CSS structure based on the desired layout and creating simple, inline SVG components for icons to avoid an external icon library.
-   **Documentation**: Helping to structure and write this `README.md` file in a clear and professional manner.
-   
