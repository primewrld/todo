//window.addEventListener("DOMContentLoaded", (event) => {
//const student = {};

//student["name"] = "Prime";

//student.age = 17;

// student["department"] = "Computer Science";

// console.log("student name is " + student.name);
// console.log(`Student age is ${student.age}\nThe department of the student is ${student.department}`)
//console.log(student);
//})

window.addEventListener("DOMContentLoaded", (event) => {
  const taskName = document.getElementById("task-name");

  const taskDescription = document.getElementsByName("Task-taskDescription");

  const button = document.getElementById("but");

    const listContainer = document.getElementById(list)

  const taskArray = [];

  button.addEventListener("click", () => {
    if (taskName.value === "" || taskDescription.value === "") {
      alert("Please fill the form");
    }
    const task = {};
    task["nameOfTask"] = taskName.value;
    task["descriptionOfTask"] = taskDescription.value;

    taskArray.push(task);
    taskName.value = "";
    taskDescription.value = "";
    console.log(taskArray);

})

    

    for(let i=0; i<=taskArray.length; i++){
const li = document.createElement('li')    

li.innerHTML = `my name ${taskArray[i]}`

console.log(i)
    
  }
});
