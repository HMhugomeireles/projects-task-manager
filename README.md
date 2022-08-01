This challenge involves the creation of a multi-user task manager web application.
The application should include the following features:

- [x] User Registration
- [x] User Authentication (login/logout)
- [ ] Visualize, add, edit and remove user projects
- [ ] Visualize, add, edit and remove tasks associated with the projects

Requirements:

- [x] One user may have several projects
- [x] One user can access his projects only
- [x] Each project may include multiple tasks
- [x] Each task must have a description, creation date and finish date
- [ ] The user needs to have a simple option to mark the tasks as completed when accessing the task list
- [ ] Each task should have its termination date visible as a tooltip, if available, and some visual way of identifying
      its status
- [ ] A task that was defined as finished should not be edited nor removed
- [ ] When a task or Project is added our deleted, the page should not fully refresh, so that users have a good
      experience
      Non functional requirements
- [ ] The application should be written in Javascript.
- [ ] The application backend should be written in Node.js.
- [ ] Unit tests

## Run Project

### Backend

```
   cd backend
   npm install
   npm start
```

http://localhost:4444

### Frontend

```
   cd web
   npm install
   npm start
```

http://localhost:3000


# Migration

- [x] Typescript all files
      - [ ] create all backend types
      - [ ] create all frontend types
- [x] migrate the require to import
- [ ] config eslint, prettier ...
      - [x] backend
      - [ ] frontend
- [ ] Run on Docker
- [ ] Docker composer
- [ ] use react-dom-router
- [ ] unit test on frontend
- [ ] unit test on backend
- [ ] integration testing
- [ ] migrate backend into clean architecture
- [ ] migrate frontend into clean architecture
