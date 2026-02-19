let students = [];

function addStudent() {
const name = document.getElementById("studentName").value;
 const age = document.getElementById("studentAge").value;
 const grade = document.getElementById("studentGrade").value;

if (!name || !age || !grade) return;

 students.push({ name, age, grade });
 displayStudents();

 document.getElementById("studentName").value = "";
document.getElementById("studentAge").value = "";
 document.getElementById("studentGrade").value = "";
}

function displayStudents() {
const list = document.getElementById("studentsList");
 list.innerHTML = "";

  students.forEach((student, i) => {
const li = document.createElement("li");
li.innerHTML = `
 ${student.name} - ${student.age} - ${student.grade}
 <button onclick="deleteStudent(${i})">Delete</button>
 `;
list.appendChild(li);
});
}

function deleteStudent(index) {
students.splice(index, 1);
displayStudents();
}

function addTask() {
const input = document.getElementById("taskInput");
const taskText = input.value;

if (!taskText) return;

const li = document.createElement("li");
li.textContent = taskText;

li.onclick = () => {
li.style.textDecoration = "line-through";
};

const delBtn = document.createElement("button");
delBtn.textContent = " Delete";
delBtn.onclick = () => {
li.remove();
};
li.appendChild(delBtn);
document.getElementById("taskList").appendChild(li);

input.value = "";
}


const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;
const slider = document.getElementById("slider");
slider.src = images[currentIndex];

function nextImage() {
 currentIndex++;
 if (currentIndex >= images.length) currentIndex = 0;
slider.src = images[currentIndex];
}

function prevImage() {
currentIndex--;
if (currentIndex < 0) currentIndex = images.length - 1;
slider.src = images[currentIndex];
}

function resetImage() {
  currentIndex = 0;
  slider.src = images[currentIndex];
}



const items = [
{ name: "Laptop" },
{ name: "Phone" },
{ name: "Tablet" },
{ name: "Camera" }
];

const itemsList = document.getElementById("itemsList");

function displayItems(filteredItems) {
 itemsList.innerHTML = "";

  filteredItems.forEach(item => {
 const li = document.createElement("li");
 li.textContent = item.name;
 itemsList.appendChild(li);
});

document.getElementById("noResults").style.display =
filteredItems.length === 0 ? "block" : "none";
}

displayItems(items);

function filterItems() {
 const value = document.getElementById("searchInput").value.toLowerCase();
const filtered = items.filter(item =>
item.name.toLowerCase().includes(value)
);
displayItems(filtered);
}