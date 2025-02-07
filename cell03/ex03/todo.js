// Function to load tasks from cookies
function loadTasks() {
    let savedTasks = document.cookie.replace(/(?:(?:^|.*;\s*)tasks\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (savedTasks) {
        let tasks = JSON.parse(savedTasks);
        tasks.forEach(task => addTaskToDOM(task));
    }
}

// Function to save tasks to cookies
function saveTasks() {
    let taskElements = document.querySelectorAll('.task');
    let tasks = [];
    taskElements.forEach(task => tasks.push(task.innerText));
    document.cookie = `tasks=${JSON.stringify(tasks)}; path=/; max-age=86400`;
}

// Function to create and add task to the DOM
function addTaskToDOM(taskText) {
    if (!taskText) return;

    let taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerText = taskText;

    // Click event to remove task with confirmation
    taskDiv.addEventListener('click', function() {
        if (confirm('Do you want to remove this task?')) {
            taskDiv.remove();
            saveTasks();
        }
    });

    document.getElementById('ft_list').prepend(taskDiv);
    saveTasks();
}

// Event listener for adding a new task
document.getElementById('new-task-btn').addEventListener('click', function() {
    let newTask = prompt('Enter a new task:');
    if (newTask) {
        addTaskToDOM(newTask);
    }
});

// Load tasks when the page is loaded
window.onload = loadTasks;
