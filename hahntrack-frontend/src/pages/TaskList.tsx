import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { MaintenanceTask } from "../domain/MaintenanceTask";
import TaskItem from "../components/TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState<MaintenanceTask[]>([]);

  useEffect(() => {
    api
      .get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

  const handleDelete = (id: number | undefined) => {
    if (!id) return;
    api.delete(`/tasks/${id}`).then(() => {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Maintenance Tasks</h1>
      <Link to="/add">➕ Add Task</Link>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
