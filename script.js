const title = document.getElementById('title');
const description = document.getElementById('description');
const mainSection = document.getElementById('main-section');


let todoID = 1;

function onAdd(){
    const titleValue = title.value;
    const validateTitleValue = titleValue.trim();
    const descriptionValue = description.value;
    const color = document.getElementById('exampleColorInput').value;
    console.log(color)

    if(!validateTitleValue){
        alert("please add something")
    }else{
        const newTodoID = `todo_${todoID}`;

    const newTodo = `
    <div id="${newTodoID}"  style="display: flex; align-items: center; margin-bottom: 10px; border-radius: 10px">
        <div class="card" style="width: 18rem; background-color: ${color}">
            <div class="card-body">
                <h5 class="card-title" style="font-size: larger; font-weight: 600;">${titleValue}</h5>

                <p class="card-text">${descriptionValue}</p>

            </div>
        </div>

        <button onclick="onDelete('${newTodoID}')" type="button" class="btn btn-danger ml-3" id="deleteBtn">Delete</button>
    </div>
    

    `;

    const newTodoContainer = document.createElement('div');


    newTodoContainer.style.display = 'flex';
    newTodoContainer.style.justifyContent = 'center';
    newTodoContainer.style.alignItems = 'center';
    newTodoContainer.innerHTML = newTodo;

    mainSection.appendChild(newTodoContainer);

    title.value = '';
    description.value = '';

    todoID++;
    }
}

function onDelete(todoID){
    const todoToRemove = document.getElementById(todoID);

    if(todoToRemove){
        todoToRemove.remove();
    }
}