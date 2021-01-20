| Path | HTTP Verb | Meaning| 
|------|-----------|--------|
| /users/ | POST | Create a new user and insert into our users table, logs in the user, handle errors gracefully |
| /users/token/ | POST | Upon successful login create a token, saves the user token to the local storage, redirect to the home page, display a welcome message including the username that persists after login is successful, handle errors gracefully |
| /api/users/userId/lists | GET | Get an HTML-based list of all of our user's lists |
| /api/users/userId/lists | POST | Create a new list, new list must be associated with current user |
| /api//lists/listId | GET | Display list.Id with all tasks associated with this list |
| /api//lists/listId/edit | GET | Display a form to edit the name of the list |
| /api//lists/listId | PATCH | Update the listName with the submitted details |
| /api/lists/listId/delete | DELETE | Delete the list with the id of list.id |
| /api/lists/listId/tasks | GET | Display all of the tasks which are related to this specific list |
| /api/lists/listId/tasks | POST | Create a new task and associate it with the current list |
| /api/tasks/taskId | GET | Display contents of the task |
| /api/tasks/taskId/edit | GET | Display a form to edit the task and it's contents |
| /api/tasks/taskId | PATCH | Update the task with the submitted details |
| /api/tasks/taskId/delete | DELETE | Delete the task with the id of tasks.id |





