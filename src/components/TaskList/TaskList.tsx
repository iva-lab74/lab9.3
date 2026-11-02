import type { Task, TaskListProps } from "../types";
import type { TaskItemProps } from "../TaskItem/TaskItem";

//pulling the props we only need / key prop and passing props down.
export default function TaskList({ task, onStatusChange, onDelete }: TaskItemProps) {
    if (task.length === 0) {
        return <p> No tasks entered.</p>;
    }

    return (
        <ul>
            {task.map((task) => (<TaskItemProps key={task.is} task={task} onStatusChnage={onStatusChnage} onDelete={onDelete} />
            ))}
        </ul>
    );
}