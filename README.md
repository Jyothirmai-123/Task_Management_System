## Project Description:
Task Management System is designed in such a way that it help individuals or teams organize, track, and manage their tasks efficiently. It provides a user-friendly interface for creating, updating, and deleting tasks, as well as marking tasks as complete or incomplete.
## Tech Stack
#### Client: ReactJS

#### Server: NodeJS, Express.js

#### Database: MySQL

The client-side of the application is built using ReatJS components for building interactive and dynamic web pages.Bootstrap is used for styling and responsive design.

The server-side of the application is built using NodeJS which is a javascript runtime environment for running JavaScript programs and is used to build server-side applications.
ExpressJS is used to handle a variety of different HTTP demands.

The database MySQL is used to store the tasks and the completion status.

## Task Operations:
1.Create new tasks with a specified name.
2.View a list of tasks with details such as task name and completion status.
3.Update task details, including the task name and completion status.
4.Delete tasks to remove them from the database.

## Screencaps

### Main Page
![image](https://github.com/Jyothirmai-123/Task_Management_System/assets/113755812/22ce7015-fe06-4ecd-866a-d7f3bf86dc0f)

### Create page
#### Adding a new task
![image](https://github.com/Jyothirmai-123/Task_Management_System/assets/113755812/774bb265-b384-41b3-92e7-5ffda02cd21a)
#### After addition of a new task
![image](https://github.com/Jyothirmai-123/Task_Management_System/assets/113755812/3fad16f8-24b0-4d06-8e23-43e6d876eadd)

### Update page
#### Updating an existing task
![image](https://github.com/Jyothirmai-123/Task_Management_System/assets/113755812/922f915e-537c-4eaa-89a9-0f95f1ec3162)

#### After updating the task
![image](https://github.com/Jyothirmai-123/Task_Management_System/assets/113755812/c164887a-e4d1-47bc-98d7-0979f86b0d20)

### Deletion of a task
![image](https://github.com/Jyothirmai-123/Task_Management_System/assets/113755812/09d61358-ba50-4315-8c05-b68d94c7966c)

## Note: Running MySQL and Apache using XAMPP
#### Steps to be followed
1.Install XAMPP to manage Apache and MySQL.    
2.Open the XAMPP Control Panel.     
3.Start both the Apache and MySQL modules.    
4.Ensure that both the modules are running on their respective ports without any errors.                    
5.By clicking on MySQL admin, you can create the database and required tables.   

## How to Run??
1. Install NodeJS
2. Go to the project folder directory and open the terminal (preferably gitbash).
3. Type "npm install" in your terminal to install the required npm dependencies and libraries such as
* In backend folder,
   * npm install mysql express
   * npm i cors      
* In frontend folder,
   * npm install bootstrap
   * npm install axios
   * npm install react-router-dom
   * npm install popper.js
   * npm install jquery
4. To access the project,
   1. In the backend directory(cd backend), run "node server.js" to start the Node.js server, ensuring no errors in the terminal.
   2. Open a new terminal, navigate to the frontend directory(cd frontend), and run "npm start" to launch the React application.
   3. Confirm Apache and MySQL are running in XAMPP.
Note: Make sure that both the frontend and backend are running simultaneously for accessing the project.
5. Finally, you can see your project runs in the browser. Manually, you can access the project at http://localhost:3000/ for frontend development.
   

