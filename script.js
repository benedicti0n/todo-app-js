const title = document.getElementById('title');
const description = document.getElementById('description');
const mainSection = document.getElementById('main-section');

let todoID = 1;

function onAdd(){
    const titleValue = title.value;
    const descriptionValue = description.value;

    const newTodo = `
    <div id="${todoID}">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title" style="font-size: larger; font-weight: 600;">${titleValue}</h5>

                <p class="card-text">${descriptionValue}</p>

            </div>
        </div>
    </div>

    <button onclick="onDelete()" type="button" class="btn btn-danger" id="deleteBtn">Delete</button>
    `

    const newTodoContainer = document.createElement('div');
    newTodoContainer.id = 'newTodoContainer';
    newTodoContainer.style.display = 'flex';
    newTodoContainer.style.justifyContent = 'center';
    newTodoContainer.style.alignItems = 'center';
    newTodoContainer.innerHTML = newTodo;

    mainSection.appendChild(newTodoContainer);

    todoID++;
}