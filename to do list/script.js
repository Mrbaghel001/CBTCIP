let tasks = [];
let completedTasks = [];

function addTask(text) {
  const task = {
    text: text,
    completed: false,
  };
  tasks.push(task);
  renderTasks();
}

function completeTask(index) {
  const task = tasks.splice(index, 1)[0];
  task.completed = true;
  completedTasks.push(task);
  renderTasks();
}

function renderTasks() {
  const tasksList = document.getElementById('tasks-list');
  const completedTasksList = document.getElementById('completed-tasks-list');

  tasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => completeTask(i));
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(task.text));
    tasksList.appendChild(listItem);
  }

  for (let i = 0; i < completedTasks.length; i++) {
    const task = completedTasks[i];
    const listItem = document.createElement('li');
    listItem.classList.add('completed');
    listItem.appendChild(document.createTextNode(task.text));
    completedTasksList.appendChild(listItem);
  }
}

const addTaskButton = document.getElementById('add-task');
addTaskButton.addEventListener('click', function () {
  const newTaskText = document.getElementById('new-task').value;
  if (newTaskText) {
    addTask(newTaskText);
    document.getElementById('new-task').value = '';
  }
});


renderTasks();
