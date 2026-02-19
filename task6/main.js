let students = [];

function render() {
const list = document.getElementById("list");
list.innerHTML = "";
students.forEach(s => {
list.innerHTML += `<li>${s.name} - ${s.age} - ${s.grade}</li>`;
});
}

function addStudent() {
const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const grade = document.getElementById("grade").value;

students.push({ name, age, grade });
render();
}

function saveJSON() {
const json = JSON.stringify(students);
document.getElementById("output").value = json;
}

function loadJSON() {
const json = document.getElementById("output").value;
students = JSON.parse(json);
render();
}

function getUser(callback) {
setTimeout(() => {
console.log("User loaded");
 callback({ id: 1 });
}, 1000);
}

function getOrders(userId, callback) {
setTimeout(() => {
  console.log("Orders loaded");
    callback([1, 2]);
 }, 1000);
}

function getOrderDetails(orderId, callback) {
 setTimeout(() => {
console.log("Details loaded");
callback({});
}, 1000);
}

getUser(user => {
 getOrders(user.id, orders => {
 getOrderDetails(orders[0], () => {});
 });
});

function getUserPromise() {
return new Promise(res => {
  setTimeout(() => {
   console.log("User loaded");
  res({ id: 1 });
    }, 1000);
 });
}

function getOrdersPromise(userId) {
return new Promise(res => {
 setTimeout(() => {
  console.log("Orders loaded");
   res([1, 2]);
  }, 1000);
  });
}

function getOrderDetailsPromise(orderId) {
return new Promise(res => {
  setTimeout(() => {
 console.log("Details loaded");
   res({});
  }, 1000);
});
}

getUserPromise()
.then(user => getOrdersPromise(user.id))
 .then(orders => getOrderDetailsPromise(orders[0]));

async function runAsyncFlow() {
 const user = await getUserPromise();
 const orders = await getOrdersPromise(user.id);
await getOrderDetailsPromise(orders[0]);
}

runAsyncFlow();

function getDataCallback(cb) {
setTimeout(() => cb("Data loaded"), 1000);
}
getDataCallback(console.log);

function getDataPromise() {
 return new Promise(res =>
  setTimeout(() => res("Data loaded"), 1000)
  );
}
getDataPromise().then(console.log);

async function runGetData() {
 const data = await getDataPromise();
console.log(data);
}
runGetData();

function getSettings() {
  return new Promise(res => {
setTimeout(() => res("settings"), 1000);
  });
}

async function loadSettings() {
const settings = await getSettings();
console.log(settings);
}
loadSettings();

let jsonData = "[]";

let arr = JSON.parse(jsonData);
arr.push({ id: 1 });
jsonData = JSON.stringify(arr);

console.log(jsonData);

function delay(msg, time) {
  return new Promise(res => {
  setTimeout(() => {
 console.log(msg);
res();
    }, time);
});
}

async function runDelay() {
await delay(1, 1000);
await delay(2, 1000);
await delay(3, 1000);
await delay(4, 1000);
}
runDelay();

function checkNumber(num) {
return new Promise((res, rej) => {
if (num > 0) res("Positive");
else if (num === 0) res("Zero");
else rej("Negative");
});
}

async function runCheckNumber() {
try {
  const result = await checkNumber(-5);
 console.log(result);
 } catch (e) {
 console.log(e);
}
}
runCheckNumber();