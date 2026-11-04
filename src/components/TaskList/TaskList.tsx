import type { Task, TaskListProps } from "../types";
import  TaskItem   from "../TaskItem/TaskItem";

//pulling the props we only need / key prop and passing props down.
export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    if (tasks.length === 0) {
        return <p> No tasks entered.</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (<TaskItem key={task.id} task={task} onStatusChange={onStatusChange} onDelete={onDelete} />
            ))}
        </ul>
    );
}