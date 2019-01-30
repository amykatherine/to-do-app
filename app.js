function onReady() {
  const addToForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';
    });
}
// using the ES6 const keyword instead of var to lock these assignments into place
// With a single-page application (SPA), we neither want the page to reload nor do we want to redirect the user to a new page. Must prevent the default form submission behavior from taking place. pass in the event as an argument to the event handler, and then call the  preventDefault() method on it within the function.
// let has a narrower scope than var. let and  const are block-scoped, and const prevents accidental reassignment.

window.onload = function() {
  onReady();
};
// Obbject called onload, which is an event handler for the load event of window. Pass a function to this Event Handler that executes when the window (a browser window or tab) finishes loading.
