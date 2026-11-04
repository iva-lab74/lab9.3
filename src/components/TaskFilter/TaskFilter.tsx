import { useState } from "react";
import type { TaskFilterProps,priority, TaskStatus } from "../types"

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | "">("");
  const [priority, setPriority] = useState<TaskPriority | "">("");

  function changeStatus(value: TaskStatus | "") {
    setStatus(value);
    onFilterChange({ status: value || undefined, priority: priority || undefined });
  }

  function changePriority(value: TaskPriority | "") {
    setPriority(value);
    onFilterChange({ status: status || undefined, priority: value || undefined });
  }

  return (
    <div>
      <select value={status} onChange={(e) => changeStatus(e.target.value as TaskStatus | "")}>
        <option value="">All statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In progress</option>
        <option value="completed">Completed</option>
      </select>

      <select value={priority} onChange={(e) => changePriority(e.target.value as TaskPriority | "")}>
        <option value="">All priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}