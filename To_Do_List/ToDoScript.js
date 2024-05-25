document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoList = document.getElementById('todoList');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        if (title && description) {
            addTodoItem(title, description);
            todoForm.reset();
        }
    });

    function addTodoItem(title, description) {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = title;

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = description;

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(row);
        });

        deleteCell.appendChild(deleteButton);
        row.appendChild(titleCell);
        row.appendChild(descriptionCell);
        row.appendChild(deleteCell);

        todoList.appendChild(row);
    }
});
