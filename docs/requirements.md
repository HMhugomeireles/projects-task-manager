# Requirements

The application should include the following features:

- [ ] User Registration

The user should enter the following data:

- name -> validation: required, min 4 char
- email -> validation: required, email valid, unique
- password -> validation: required, min 8 char, upper case and numbers

The user should receive email to validate the email and activation account


- [ ] User Authentication (login/logout)
- [ ] Visualize, add, edit and remove user projects
- [ ] Visualize, add, edit and remove tasks associated with the projects

Requirements:

- [ ] One user may have several projects
- [ ] One user can access his projects only
- [ ] Each project may include multiple tasks
- [ ] Each task must have a description, creation date and finish date
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
