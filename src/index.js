import './style.css';
const sectionTasks = document.querySelector('.open-section .tasks');
const sectionTasksDone = document.querySelector('.done-section .tasks');

const gogo = document.querySelector('.ADD');
const taskNameInput = document.querySelector('.new-task-section input');

taskNameInput.onkeydown = function(e) {
  if (e.key == 'Enter') {
    gogo.click();
  }
};

gogo.onclick = function() {
  const newTask = document.createElement('div');
  newTask.classList.add('task');

  const labelCheckbox = document.createElement('label');
  labelCheckbox.classList.add('checkbox');

  const inputChekbox = document.createElement('input');
  inputChekbox.classList.add('checkboxTask');
  inputChekbox.setAttribute('type', 'checkbox');
  inputChekbox.onchange = function() {
    if (inputChekbox.checked) {
      sectionTasks.removeChild(newTask);
      sectionTasksDone.appendChild(newTask);
    } else {
      sectionTasksDone.removeChild(newTask);
      sectionTasks.appendChild(newTask);
    }
  };

  const divInputTextTask = document.createElement('div');
  divInputTextTask.classList.add('titleTask');
  divInputTextTask.textContent = taskNameInput.value;

  const dateDiv = document.createElement('div');
  dateDiv.classList.add('creationDate');

  const creationDateDiv = document.createElement('div');
  creationDateDiv.classList.add('alltime');
  const creationTimeElement = document.createElement('time');
  creationTimeElement.textContent = new Date().toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
  dateDiv.setAttribute('data-date', new Date());
  creationDateDiv.appendChild(creationTimeElement);
  dateDiv.appendChild(creationDateDiv);
  // const inputTitleTask = document.createElement('input');
  // inputTitleTask.classList.add('titleInputTask');
  // inputTitleTask.setAttribute('type', 'text');

  labelCheckbox.appendChild(inputChekbox);
  // divInputTextTask.appendChild(inputTitleTask);

  newTask.appendChild(labelCheckbox);
  newTask.appendChild(divInputTextTask);
  newTask.appendChild(dateDiv);

  sectionTasks.appendChild(newTask);

  let tasks;
  const tasksFromLocaleStorage = localStorage.getItem('tasks');

  if (tasksFromLocaleStorage === undefined) {
    tasks = [];
  } else {
    tasks = JSON.parse(tasksFromLocaleStorage);
  }

  tasks.push({
    title: taskNameInput.value,
    creationDate: new Date(),
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  taskNameInput.value = '';
};

const openSectionSortingSelector = document.querySelector(
  '.open-task-section-header select',
);
openSectionSortingSelector.onchange = function() {
  const isAsc = openSectionSortingSelector.value == 'asc';
  const tasksElements = sectionTasks.querySelectorAll('.task');
  const tasksElementsArray = Array.from(tasksElements);
  tasksElementsArray.sort((prev, next) => {
    const dateElement1 = prev.querySelector('.creationDate');
    const dateElement2 = next.querySelector('.creationDate');
    const date1 = new Date(dateElement1.getAttribute('data-date')).getTime();
    const date2 = new Date(dateElement2.getAttribute('data-date')).getTime();

    return isAsc ? date2 - date1 : date1 - date2;
  });

  sectionTasks.innerHTML = '';
  tasksElementsArray.forEach(el => {
    sectionTasks.appendChild(el);
  });
};

const searchInput = document.querySelector('.search input');

searchInput.oninput = function() {
  const tasksElements = document.querySelectorAll('.task');
  const tasksElementsArray = Array.from(tasksElements);
  tasksElementsArray.forEach(task => {
    const textElement = task.querySelector('.titleTask');
    const text = textElement.textContent;
    if (text.toLowerCase().includes(searchInput.value.toLowerCase())) {
      task.classList.remove('hidden');
    } else {
      task.classList.add('hidden');
    }
  });
};
