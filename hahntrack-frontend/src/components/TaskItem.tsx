import { MaintenanceTask } from '../domain/MaintenanceTask';
import { Link } from 'react-router-dom';

interface Props {
  task: MaintenanceTask;
  onDelete: (id: number | undefined) => void;
}

export default function TaskItem({ task, onDelete }: Props) {
  return (
    <li>
      <strong>{task.title}</strong> - {task.machineName} ({task.status})
      <br />
      <Link to={`/edit/${task.id}`}>✏️ Edit</Link>
      <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
    </li>
  );
}