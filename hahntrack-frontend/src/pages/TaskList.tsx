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
    <div className="min-h-screen bg-gray-100 p-8"
    style={{
        backgroundImage: "url('/cover.png')",  // assuming cover.png is in public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Maintenance Tasks</h1>
          <Link
            to="/add"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition"
          >
            ➕ Add Task
          </Link>
        </div>

        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks found.</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} onDelete={handleDelete} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskList;
