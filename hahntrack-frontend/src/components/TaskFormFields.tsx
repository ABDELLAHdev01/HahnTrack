import React from 'react';
import { MaintenanceTask } from '../domain/MaintenanceTask';

interface TaskFormFieldsProps {
  form: MaintenanceTask;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function TaskFormFields({ form, onChange }: TaskFormFieldsProps) {
  return (
    <>
      <div>
        <label>Title:</label><br />
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          required
          placeholder="Title"
        />
      </div>
      
      <div>
        <label>Description:</label><br />
        <input
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Description"
        />
      </div>

      <div>
        <label>Machine Name:</label><br />
        <input
          name="machineName"
          value={form.machineName}
          onChange={onChange}
          placeholder="Machine Name"
        />
      </div>

      <div>
        <label>Due Date:</label><br />
        <input
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Priority:</label><br />
        <select name="priority" value={form.priority} onChange={onChange}>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      <div>
        <label>Status:</label><br />
        <select name="status" value={form.status} onChange={onChange}>
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>
    </>
  );
}
