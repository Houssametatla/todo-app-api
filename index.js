const express = require("express");
const app = express();
const { tasks, addTask, removeTask, updateTask } = require("./utils");

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = req.body;
  console.log(newTask);
  addTask(newTask);
  res.status(200).send("task added");
});

app.put("/tasks/:taskId", (req, res) => {
  const id = req.params.taskId;
  const givenTask = req.body;

  updateTask(id, givenTask);
  res.status(200).send("task updated");
});

app.delete("/tasks/:taskId", (req, res) => {
  const id = req.params.taskId;
  removeTask(id);
  console.log(id);
  res.status(200).send("tasks Deleted");
});
app.listen(3000, () => console.log("server is running"));
