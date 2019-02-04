function onReady() {
  let id = 0;
  let toDos = []; //using let because we are going to add and remove items from the array
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    // if newToDoText doesn't have a value, get out of the function
    if (!newToDoText.value) { return; }

    // create an object
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;
    newToDoText.value = '';

    renderTheUI();
  }
  // renderTheUI function is where we create all UI's related things
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    // allow to say when adding new todo, the li is not repeating itself
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      newLi.textContent = toDo.title;
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        });

        renderTheUI();
      });

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
