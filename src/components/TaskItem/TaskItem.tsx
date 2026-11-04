
import type { TaskItemProps,  TaskStatus }from "../types";

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    return (
        <li className={`task ${task.status} ${task.priority}`}>
            <strong>{task.title}</strong>

            {task.priority === "high" && <span className="badge">High priority</span>}
            {task.description && <p>{task.description}</p>}

            <select
                value={task.status}
                onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
            >
                <option value="todo">To do</option>
                <option value="in-progress">In progress</option>
                <option value="done">Done</option>
            </select>

            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}