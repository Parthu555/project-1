// Get DOM elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event listener to add a task
addButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function () {
            li.remove();
        };

        // Add delete button to the list item
        li.appendChild(deleteButton);

        // Add click event to mark as completed
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        // Append the new task to the list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = '';
    }
});

// Optional: Allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});
