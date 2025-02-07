$(document).ready(function () {
    // Load tasks from cookies
    function loadTasks() {
        let savedTasks = document.cookie.replace(/(?:(?:^|.*;\s*)tasks\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (savedTasks) {
            let tasks = JSON.parse(savedTasks);
            tasks.forEach(task => addTaskToDOM(task));
        }
    }

    // Save tasks to cookies
    function saveTasks() {
        let tasks = [];
        $(".task").each(function () {
            tasks.push($(this).text());
        });
        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/; max-age=86400`;
    }

    // Function to create and add a task to the DOM
    function addTaskToDOM(taskText) {
        if (!taskText) return;

        let $taskDiv = $("<div></div>")
            .addClass("task")
            .text(taskText)
            .click(function () {
                if (confirm("Do you want to remove this task?")) {
                    $(this).remove();
                    saveTasks();
                }
            });

        $("#ft_list").prepend($taskDiv);
        saveTasks();
    }

    // Event listener for adding a new task
    $("#new-task-btn").click(function () {
        let newTask = prompt("Enter a new task:");
        if (newTask) {
            addTaskToDOM(newTask);
        }
    });

    // Load tasks when the page is ready
    loadTasks();
});
