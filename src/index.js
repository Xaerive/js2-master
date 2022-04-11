import './style.css';
const sectionTasks = document.querySelector('.open-section .tasks');
const sectionTasksDone = document.querySelector('.done-section .tasks');

const gogo = document.querySelector('.ADD');
const taskNameInput = document.querySelector('.new-task-section input');

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
  const creationDateDiv = document.createElement('div');
  creationDateDiv.classList.add('alltime');
  const creationTimeElement = document.createElement('time');
  creationTimeElement.textContent = new Date().toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
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
};
