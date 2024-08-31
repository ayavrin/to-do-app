
# To-Do List Application

This README provides an overview of the files, structure, and functionalities of the To-Do List application. The application is built with HTML, CSS, and JavaScript. Users can add, remove, and mark tasks as complete, with some additional features such as validation and UI improvements.

---

## Table of Contents:
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Features](#features)
4. [How to Run the Project](#how-to-run-the-project)
5. [Technical Details](#technical-details)
6. [Improvements](#improvements)

---

## Project Overview

The To-Do List application allows users to:
- Add new tasks.
- Mark tasks as completed.
- Delete tasks from the list.
- Limit task additions to 5 items.
- Show a dialog box when the user attempts to add an empty task.

---

## File Structure

```
root/
│
├── assets/
│   ├── checklist.png        # Favicon icon
│   └── trash.png            # Trash icon for deleting tasks
│   └── plus.png             # Plus icon for adding tasks
│
├── index.html               # HTML structure of the application
├── style.css                # CSS for layout and styling
├── app.js                   # JavaScript for handling events and logic
└── README.md                # This README file
```

---

## Features

### 1. Task Addition
- Users can enter a task in the input field and press the "+" button to add it to the list.
- If the input field is empty, a dialog box appears, prompting the user to enter text.

### 2. Task Completion
- Users can mark tasks as complete by checking the checkbox next to the task.
- Completed tasks are visually marked with a strikethrough and italicized style.

### 3. Task Deletion
- Users can delete tasks by clicking on the trash icon next to the task.
- Deleted tasks are removed from both the DOM and sessionStorage.

### 4. Task Limitation
- A maximum of 5 tasks can be added at a time. Once this limit is reached, the input field is disabled, and a warning message is shown.
- When a task is deleted, the user is allowed to add more tasks until the limit is reached again.

### 5. Session Persistence
- Tasks are stored in `sessionStorage`, so they are not persistent across browser sessions.

---

## How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/to-do-list.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd to-do-list
   ```

3. **Open the HTML File**
   - You can open the `index.html` file directly in any modern web browser.

---

## Technical Details

### 1. HTML (index.html)
- Provides the structure for the application.
- Contains the input field for adding tasks and a section for displaying the task list.
- Includes a `dialog` element that serves as a pop-up when the input field is empty.

### 2. CSS (style.css)
- Styles the layout and elements of the application, including the input field, task list, buttons, and the dialog box.
- Key styles:
    - The `dialog` element is centered using `position: absolute` and `transform`.
    - Task items are displayed with a gradient background and are marked as "completed" with a strikethrough when checked.
    - A responsive and clean interface with a modern font from Google Fonts (Roboto Condensed).

### 3. JavaScript (app.js)
- Handles user interactions and events such as adding, removing, and completing tasks.
- Key logic:
    - **initApp()** initializes the event listeners.
    - **addToTheList()** adds a new task to the list and stores it in `sessionStorage`.
    - **sessionStorage** is used for storing tasks temporarily.
    - **Dialog Handling:** Displays a dialog box when the user attempts to submit an empty input.
    - **Task Limitation Logic:** Disables the input field after 5 tasks and re-enables it when tasks are deleted.

### 4. Assets
- The `assets/` folder contains images for the favicon, the trash icon (for deleting tasks), and the plus icon (for adding tasks).

---

## Improvements

- **Validation Enhancements:** The input field is validated to ensure users cannot add empty tasks.
- **Task Limit:** There is a limit of 5 tasks at a time, and this can be easily adjusted in the JavaScript by modifying the `count` variable.
- **Dialog Box:** A modal dialog appears to alert users when they try to submit an empty task.
- **Styling Enhancements:** A responsive and visually appealing design is achieved with gradients, modern fonts, and clean UI components.

---

## Future Improvements

- **Persistent Storage:** Use `localStorage` instead of `sessionStorage` to make tasks persistent across browser sessions.
- **Drag-and-Drop Support:** Allow users to reorder tasks via drag-and-drop functionality.
- **Task Editing:** Provide an option for users to edit existing tasks.
