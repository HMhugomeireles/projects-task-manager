This challenge involves the creation of a multi-user task manager web application.
The application should include the following features:

1. User Registration
2. User Authentication (login/logout)
3. Visualize, add, edit and remove user projects
4. Visualize, add, edit and remove tasks associated with the projects

Requirements:

1. One user may have several projects
2. One user can access his projects only
3. Each project may include multiple tasks
4. Each task must have a description, creation date and finish date
5. The user needs to have a simple option to mark the tasks as completed when accessing the task list
6. Each task should have its termination date visible as a tooltip, if available, and some visual way of identifying
   its status
7. A task that was defined as finished should not be edited nor removed
8. When a task or Project is added our deleted, the page should not fully refresh, so that users have a good
   experience
   Non funcional requirements
9. The application should be written in Javascript.
10. The application backend should be written in Node.js or GoLang.
11. The authentication and registration layers should be coded and not based on pre-existing modules (such as
    Passport).
12. For the frontend, javascript frameworks can be used (Angular, React, Polymer or others).
13. Components should be used to promote increased code reusage (react or angular components,
    webcomponents or other alternatives)
    Extras:
14. Build tools (e.g. grunt or gulp)
15. Unit tests

## Run Project

### Backend

cd backend
npm install
npm start

http://localhost:4444

### Frontend

cd web
npm install
npm start

http://localhost:3000
