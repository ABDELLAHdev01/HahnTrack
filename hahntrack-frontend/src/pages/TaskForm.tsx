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

type Errors = Partial<Record<keyof MaintenanceTask, string>>;

function TaskForm() {
  const [form, setForm] = useState<MaintenanceTask>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const { id } = useParams();
  const navigate = useNavigate();

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!form.title.trim()) {
      newErrors.title = "Title is required";
    } else if (form.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (form.dueDate) {
      const due = new Date(form.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (isNaN(due.getTime())) {
        newErrors.dueDate = "Due date is invalid";
      } else if (due < today) {
        newErrors.dueDate = "Due date cannot be in the past";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    if (!validate()) return;

    const req = id ? api.put(`/tasks/${id}`, form) : api.post("/tasks", form);
    req.then(() => navigate("/"));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 p-6"
      style={{
        backgroundImage: "url('/cover.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {id ? "Edit Task" : "Add New Task"}
        </h2>
        <form onSubmit={handleSubmit}>
          <TaskFormFields form={form} onChange={handleChange} errors={errors} />
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
