import { useState } from "react";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskList from "./components/TaskList/TaskList";
import type { Task, TaskStatus, } from "./components/types";
import "./App.css";

//new tasks
const startingTasks: Task[] = [

];


export default function App() {
  const [tasks, setTasks] = useState<Task[]>(startingTasks);
  const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: TaskPriority }>({});

  function changeStatus(id: string, status: TaskStatus) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  const visibleTasks = tasks.filter(
    (t) =>
      (!filters.status || t.status === filters.status) &&
      
  );

  return (
    <main>
      <h1>Tasks</h1>
      <TaskList tasks={visibleTasks} onStatusChange={changeStatus} onDelete={deleteTask} />
    </main>
  );
}
