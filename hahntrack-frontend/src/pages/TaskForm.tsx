import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import { MaintenanceTask } from "../domain/MaintenanceTask";
import TaskFormFields from "../components/TaskFormFields";
import Button from "../components/Button";

const initialForm: MaintenanceTask = {
  title: "",
  description: "",
  machineName: "",
  priority: "LOW",
  status: "PENDING",
  dueDate: "",
};

function TaskForm() {
  const [form, setForm] = useState<MaintenanceTask>(initialForm);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (id) {
      api.get(`/tasks/${id}`).then((res) => setForm(res.data));
    }
  }, [id]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const req = id ? api.put(`/tasks/${id}`, form) : api.post("/tasks", form);
    req.then(() => navigate("/"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {id ? "Edit Task" : "Add New Task"}
        </h2>
        <form onSubmit={handleSubmit}>
          <TaskFormFields form={form} onChange={handleChange} />
          <div className="text-center mt-6">
            <Button type="submit" variant="primary">
              {id ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
