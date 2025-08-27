document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text !== "") {
        addTodo(text);
        input.value = "";
    }
});

function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.onclick = function(e) {
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById('todo-list').appendChild(li);
}