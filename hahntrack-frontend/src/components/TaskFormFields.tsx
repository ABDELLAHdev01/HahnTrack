import React from 'react';
import { MaintenanceTask } from '../domain/MaintenanceTask';

interface TaskFormFieldsProps {
  form: MaintenanceTask;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors?: Partial<Record<keyof MaintenanceTask, string>>;
}

export default function TaskFormFields({ form, onChange, errors = {} }: TaskFormFieldsProps) {
  const inputClass =
    "w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 " +
    "border-gray-300 focus:ring-indigo-500";

  const errorInputClass =
    "w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 " +
    "border-red-500 focus:ring-red-500";

  return (
    <>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="title">
          Title:
        </label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={onChange}
          required
          placeholder="Title"
          className={errors.title ? errorInputClass : inputClass}
        />
        {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="description">
          Description:
        </label>
        <input
          id="description"
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Description"
          className={errors.description ? errorInputClass : inputClass}
        />
        {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="machineName">
          Machine Name:
        </label>
        <input
          id="machineName"
          name="machineName"
          value={form.machineName}
          onChange={onChange}
          placeholder="Machine Name"
          className={errors.machineName ? errorInputClass : inputClass}
        />
        {errors.machineName && <p className="text-red-600 text-sm mt-1">{errors.machineName}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="dueDate">
          Due Date:
        </label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={onChange}
          className={errors.dueDate ? errorInputClass : inputClass}
        />
        {errors.dueDate && <p className="text-red-600 text-sm mt-1">{errors.dueDate}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="priority">
          Priority:
        </label>
        <select
          id="priority"
          name="priority"
          value={form.priority}
          onChange={onChange}
          className={errors.priority ? errorInputClass : inputClass + " bg-white"}
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        {errors.priority && <p className="text-red-600 text-sm mt-1">{errors.priority}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="status">
          Status:
        </label>
        <select
          id="status"
          name="status"
          value={form.status}
          onChange={onChange}
          className={errors.status ? errorInputClass : inputClass + " bg-white"}
        >
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
        {errors.status && <p className="text-red-600 text-sm mt-1">{errors.status}</p>}
      </div>
    </>
  );
}
