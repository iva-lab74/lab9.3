export type TaskStatus = 'pending' | 'in-progress' | 'completed';

//Task List Component
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}
 
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

//Task Item Component
export  interface TaskItemProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

//Task Filter Component
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => void;
}
export type Filter = "all" | TaskStatus;