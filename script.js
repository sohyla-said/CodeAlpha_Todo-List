// add an item 
function addTask(){
    var task = document.getElementById('todolist-input');
    var taskNode = document.createTextNode(task.value)

    if(task.value != ''){
        const list = document.createElement("li");
        list.className="todolist-item";
        list.appendChild(taskNode);
        const closeIcon = document.createElement("i");
        closeIcon.className = "fa-solid fa-xmark";
        list.appendChild(closeIcon);
        
        document.getElementById("todolist-list").appendChild(list);

        // You need to ensure that when a new item is added to the list, it also gets the necessary event listeners 
        list.addEventListener('click', completed);

        // Add event listener for removing the item
        closeIcon.addEventListener('click', remove);
    }
    else{
        alert("Please enter a task to be done.")
    }
    task.value="";
}

function completed(){
    this.classList.toggle('completed');
    event.stopPropagation();
}

function remove(event) {
    const listItem = this.parentElement;
    listItem.remove();
    event.stopPropagation();
}

// Event delegation for marking an item as completed or removing it
document.getElementById("todolist-list").addEventListener('click', function(event) {
    const target = event.target;

    if (target.matches('.todolist-item')) {
        completed.call(target);
    } else {
        remove.call(target);
    }
});
