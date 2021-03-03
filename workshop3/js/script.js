const addForm = document.querySelector(".add");//reference to form
const list = document.querySelector(".todos"); //reference to ul





//Ajouter todos
function generateTemplate(todo) {
  const html = `
   <li>
        <p>${todo}</p>
        <button><img src="./img/trash.png"></button>
    </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length > 0) {
    generateTemplate(todo);
    // addForm.reset();
    addForm.add.value = '';
  }
});