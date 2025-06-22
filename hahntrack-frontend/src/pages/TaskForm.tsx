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
    <form onSubmit={handleSubmit}>
      <TaskFormFields form={form} onChange={handleChange} />
      <Button type="submit" variant="primary">
        {id ? "Update" : "Create"}
      </Button>
    </form>
  );
}

export default TaskForm;
