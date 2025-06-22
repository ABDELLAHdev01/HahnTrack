import { MaintenanceTask } from '../domain/MaintenanceTask';
import { Link } from 'react-router-dom';

interface Props {
  task: MaintenanceTask;
  onDelete: (id: number | undefined) => void;
}

export default function TaskItem({ task, onDelete }: Props) {
  return (
    <li
      className="flex flex-col md:flex-row md:items-center justify-between p-4 mb-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
    >
      <div>
        <strong className="text-lg text-indigo-700">{task.title}</strong>
        <p className="text-gray-600">
          {task.machineName} —{' '}
          <span
            className={`font-semibold ${
              task.status === 'COMPLETED' ? 'text-green-600' :
              task.status === 'IN_PROGRESS' ? 'text-yellow-600' :
              'text-red-600'
            }`}
          >
            {task.status.replace('_', ' ')}
          </span>
        </p>
      </div>

      <div className="mt-3 md:mt-0 flex space-x-4">
        <Link
          to={`/edit/${task.id}`}
          className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          ✏️ Edit
        </Link>
        <button
          onClick={() => onDelete(task.id)}
          className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition"
          aria-label={`Delete task ${task.title}`}
        >
          🗑️ Delete
        </button>
      </div>
    </li>
  );
}
