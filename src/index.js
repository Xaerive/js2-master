import './style.css';
const sectionTasks = document.querySelector('.open-section .tasks')

const gogo = document.querySelector('.ADD')

gogo.onclick = function () {
console.log('hello')

const newTask = document.createElement('div')
newTask.classList.add('task')


const inputCheckboxTask = document.createElement('div')
inputCheckboxTask.classList.add('inputCheckboxTask')


const labelCheckbox = document.createElement('label')
labelCheckbox.classList.add('checkbox')

const inputChekbox = document.createElement('input')
inputChekbox.classList.add('checkboxTask')
inputChekbox.setAttribute('type', 'checkbox')


const divInputTextTask = document.createElement('div')
divInputTextTask.classList.add('titleTask')

const inputTitleTask = document.createElement('input')
inputTitleTask.classList.add('titleInputTask')
inputTitleTask.setAttribute('type', 'text')


labelCheckbox.appendChild(inputChekbox)
divInputTextTask.appendChild(inputTitleTask)

inputCheckboxTask.appendChild(labelCheckbox)
inputCheckboxTask.appendChild(divInputTextTask)

newTask.appendChild(inputCheckboxTask)

sectionTasks.appendChild(newTask)

}