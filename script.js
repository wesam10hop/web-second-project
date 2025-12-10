const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");
const errorMessage = document.getElementById("error-message");
const taskForm = document.getElementById("task-form");

const popup = document.getElementById("custom-popup");
const popupMessage = document.getElementById("popup-message");
const popupConfirm = document.getElementById("popup-confirm");
const popupCancel = document.getElementById("popup-cancel");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";