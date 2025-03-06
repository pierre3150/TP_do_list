document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const filterBtns = document.querySelectorAll(".filter-btn");

    let tasks = [];

    let i = 0;

    Object.keys(localStorage).forEach(key => {
        const taskText = localStorage.getItem(key);
        tasks.push([taskText, false, key]);
        console.log(key);
        i++;
        console.log(i);
    });

    function renderTasks(filter = "all") {
        taskList.innerHTML = "";
        const filteredTasks = tasks.filter(task => {
            if (filter === "completed") return task[1];
            if (filter === "pending") return !task[1];
            return true;
        });

        filteredTasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = "task-item";
            li.innerHTML = `
                <span class="task-text ${task[1] ? 'completed' : ''}">${task[0]}</span> <!-- Accède au texte avec task[0] -->
                <div class="actions">
                    <button class="complete-btn" data-index="${index}"><i class="fa-solid fa-check"></i></button>
                    <button class="edit-btn" data-index="${index}"><i class="fa-solid fa-pen"></i></button>
                    <button class="delete-btn" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text) {
            localStorage.setItem(i, text);
            tasks.push([text, false, i]);
            i++;
            taskInput.value = "";
            renderTasks();
        }
    });

    taskList.addEventListener("click", (element) => {
        const index = element.target.closest("button")?.dataset.index;
        if (index === undefined) return;

        if (element.target.closest(".complete-btn")) {
            tasks[index][1] = !tasks[index][1];
        } else if (element.target.closest(".edit-btn")) {
            const newText = prompt("Modifier la tâche :", tasks[index][0]);
            if (newText) {
                tasks[index][0] = newText;
                console.log(tasks[index][0]);
                console.log(localStorage.getItem(tasks[index][2]));
                localStorage.setItem(tasks[index][2], newText);
            };
        } else if (element.target.closest(".delete-btn")) {
            localStorage.removeItem(tasks[index][2]);
            tasks.splice(index, 1);
        }
        renderTasks();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            renderTasks(btn.dataset.filter);
        });
    });

    renderTasks();
});