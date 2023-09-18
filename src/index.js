import displayTaskForm from "./modules/todo-container";

// Function that displays the task form when the add task button is clicked
const toggleTaskForm = () => {
    const taskForm = document.querySelector('.add-task_form');
    taskForm.style.display = 'flex';
};

// Function that adds a new task when the Add button is clicked
const addTaskCallback = () => {
    // Get the task name from the input field
    const activitiesContainer = document.querySelector('.activities-container');
    const taskForm = document.querySelector('.add-task_form');
    const taskInput = document.querySelector('.add-task_input');
    const taskName = taskInput.value.trim(); // Trim to remove leading/trailing whitespace

    // Check if the task name is not empty
    if (taskName !== '') {
        // Create a new task element and populate it with the task name
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML = `
            <label>
                <input type="checkbox">
            </label>
            <span>${taskName}</span>
            <span class="date">Date</span>
            <i class="fa-solid fa-trash"></i>
        `;

        // Append the new task element to the activities container
        activitiesContainer.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';

        // Hide the task form
        taskForm.style.display = 'none';
    } else {
        // Display an error message or provide user feedback that the task name is required
        alert('Please enter a task name.');
    }
}

// Function that hides the task form when the Cancel button is clicked
const cancelTaskCallback = () => {
    const taskForm = document.querySelector('.add-task_form');
    taskForm.style.display = 'none';
}

// Call the displayTaskForm function with the toggleTaskForm callback
displayTaskForm(toggleTaskForm, addTaskCallback, cancelTaskCallback);