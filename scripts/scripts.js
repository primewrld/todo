// const student = {};
// //const studentData = new Object();

// student['name'] = 'Chika';
// student.age = 34;
// student['department'] = 'Computer Engineering';
// console.log('The name of the student is ' + student.name);
// console.log(`The age of the student is ${student.age} \n the department is ${student.department}`);
// console.log(student);

//New line
window.addEventListener("DOMContentLoaded", (event) => {
  
  const taskName = document.getElementById("task-name");
  const taskDescription = document.getElementById("task-description");
  const button = document.getElementById("add-todo");
  const listContainer = document.getElementById("lists");

  const taskArray = [
    { nameOfTask: "cook food", taskDescription: "try cook rice" },
    { nameOfTask: "cook meat", taskDescription: "make it spicy" },
  ];

  addTodo()

  function addTodo () {
    if (taskName.value === "" || taskDescription.value === "") {
      alert("Please fill this form!");
      return;
    }
    const newTask = {
      nameOfTask: taskName.value,
      taskDescription: taskDescription.value,
    };

    taskArray.push(newTask);
    console.log(taskArray.length);
    taskName.value = "";
    taskDescription.value = "";
    return;
  };

  const deleteTodo = (e) => {
    const targetEle = e.target;
    let selector = "delete";
    if (targetEle.className === selector) {
      console.log(targetEle.parentNode.textContent)
      const index = taskArray.indexOf(targetEle.previousSibling.textContent);
      listContainer.removeChild(targetEle.parentNode);
      taskArray.splice(index, 1);
    }
  };

  const displayTodo = () => {
    listContainer.innerHTML = "";
    for (let index = 0; index < taskArray.length; index++) {
      // <div> </div>
      const itemDiv = document.createElement("div");

      // <li></li>
      const li = document.createElement("li");

      // <div class="item"> </div>
      itemDiv.setAttribute("class", "item");

      //  <li class="todo-item"></li>
      li.setAttribute("class", "todo-item");

      //   <button></button>
      const deleteBtn = document.createElement("button");

      //   <button></button>
      const editBtn = document.createElement("button");

      //    <button class="edit"></button>
      editBtn.className = "edit";

      //    <button class="edit"> Edit</button>
      editBtn.textContent = "Edit";

      // <button> Delete</button>
      deleteBtn.textContent = "delete";

      // <button class="delete"> Delete</button>
      deleteBtn.className = "delete";

      //  <li class="todo-item"> fetch water </li>
      li.textContent = taskArray[index].nameOfTask;

      // <ul> <div class"iem"></div> </ul>
      listContainer.appendChild(itemDiv);

      // <ul> <div class="item"> <li class="todo-item"> </li> </div> </ul>
      itemDiv.appendChild(li);

      //  <div class="item">
      //     <li class="todo-item">
      //     </li>
      //      <button class="edit"> Edit</button>
      //  </div>
      itemDiv.appendChild(editBtn);
      //  <div class="item">
      //     <li class="todo-item">
      //       fetch water
      //    </li>
      //    <button class="edit"> Edit</button>
      //     <button class="delete"> Delete</button>
      //  </div>
      itemDiv.appendChild(deleteBtn);

      //<ul>
      //  <div>
      //     <li>
      //        <button class="edit"> Edit</button>
      //      <button class="delete"> Delete</button>
      //    </li>
      //   </div>
      // </ul>
      listContainer.appendChild(itemDiv);
    }
  };

  button.addEventListener("click", () => {
    addTodo();
    displayTodo();
  });

  listContainer.addEventListener("click", deleteTodo);
});
