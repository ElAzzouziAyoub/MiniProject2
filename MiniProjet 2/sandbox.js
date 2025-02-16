const searchBar = document.querySelector('.form-control.m-auto');

function addtodo(){
    const todo = document.querySelectorAll(".form-control.m-auto")[1];

    if (todo.value != ""){

        //Create the HTML elements
        const unordered_list = document.querySelector(".list-group.todos.mx-auto.text-light");
        const new_todo = document.createElement("li");
        const new_span = document.createElement("span");
        const new_icon = document.createElement("i");

        //Adding the delete function to the icons 
        new_icon.addEventListener("click",function() {
            // Remove the <li> containing the clicked icon
            this.parentElement.remove();
        });

        //Adding the required classes
        new_todo.classList.add("list-group-item","d-flex","justify-content-between","align-items-center");
        new_icon.classList.add("far","fa-trash-alt","delete");

        //Giving the new span the input wich the user entered
        new_span.textContent = todo.value;

        //Appending the span and the icon to the li
        new_todo.appendChild(new_span);
        new_todo.appendChild(new_icon);

        //Appending the li to the unordered list
        unordered_list.appendChild(new_todo);
    }

}

document.querySelectorAll('.delete').forEach(icon => {
    icon.addEventListener('click', function() {
        // Remove the <li> containing the clicked icon
        this.parentElement.remove();
    });
});




function updateSearch() {
    const searchTerm = searchBar.value.toLowerCase();
    const todoItems = document.querySelectorAll(".list-group.todos li");

    todoItems.forEach(item => {
        const todoText = item.querySelector('span').textContent.toLowerCase();
        if (todoText.startsWith(searchTerm)) {
            item.style.visibility = "visible"; // Show matching items
            item.style.height = "auto"; // Ensure it remains visible
            item.style.position = "static";
        } else {
            item.style.visibility = "hidden"; // Hide non-matching items
            item.style.height = "0px"; // Prevent empty space
            item.style.position = "absolute";
        }
    });
}


searchBar.addEventListener("input",updateSearch);