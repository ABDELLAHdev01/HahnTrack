export interface MaintenanceTask {
  id?: number;
  title: string;
  description: string;
  machineName: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  dueDate: string;
  createdAt?: string;
  updatedAt?: string;
}