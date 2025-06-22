import React from 'react';
import { MaintenanceTask } from '../domain/MaintenanceTask';

interface TaskFormFieldsProps {
  form: MaintenanceTask;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function TaskFormFields({ form, onChange }: TaskFormFieldsProps) {
  return (
    <>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={onChange}
          required
          placeholder="Title"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Description"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="machineName">Machine Name:</label>
        <input
          id="machineName"
          name="machineName"
          value={form.machineName}
          onChange={onChange}
          placeholder="Machine Name"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="dueDate">Due Date:</label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="priority">Priority:</label>
        <select
          id="priority"
          name="priority"
          value={form.priority}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={form.status}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>
    </>
  );
}
