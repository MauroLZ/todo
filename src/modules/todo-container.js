// todo-container.js

const displayTaskForm = (toggleTaskForm, addTaskCallback, cancelTaskCallback) => {
    const taskForm = document.querySelector('.add-task_form');
    const addTaskButton = document.querySelector('.add-task_button');
    const addButton = document.querySelector('.confirm-task');
    const cancelButton = document.querySelector('.cancel-task');


    // Event listener that calls the addTaskCallback function when the Add button is clicked
    addButton.addEventListener('click', () => {
        addTaskCallback();
    });

    // Event listener that calls the cancelTaskCallback function when the Cancel button is clicked
    cancelButton.addEventListener('click', () => {
        cancelTaskCallback();
    });

    // Event listener that calls the toggleTaskForm callback when the add task button is clicked
    addTaskButton.addEventListener('click', () => {
        toggleTaskForm();
    });
}


export default displayTaskForm;
