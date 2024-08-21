document.addEventListener('DOMContentLoaded', () => {


    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    // Load Tasks from local Storage



    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


    // Render tasks

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {


            const li = document.createElement('li');
            li.textContent = task;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteTask(index));
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
        });

    };



    // Add Task 

    const addTask = (task) => {

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };


    // Delete Task

    const deleteTask = (index) => {

        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };


    //  Handle form submission

    taskForm.addEventListener('submit', (e) => {

        e.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
        }

    });



    // Initial render
    renderTasks();


});