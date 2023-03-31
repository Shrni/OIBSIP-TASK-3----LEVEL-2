
const taskInput = document.querySelector('input[type="text"]');
const addBtn = document.querySelector('button');
const taskList = document.querySelector('.tasks');


addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);

// functions
function addTask(event) {
	event.preventDefault();
	if (taskInput.value.trim() === '') {
		alert('Please enter a task');
		return;
	}
	const li = document.createElement('li');
	const span = document.createElement('span');
	const deleteBtn = document.createElement('button');
	span.innerText = taskInput.value;
	deleteBtn.innerText = 'Delete';
	li.appendChild(span);
	li.appendChild(deleteBtn);
	taskList.appendChild(li);
	taskInput.value = '';
}

function deleteTask(event) {
	if (event.target.tagName.toLowerCase() === 'button') {
		event.target.parentNode.remove();
	}
}
