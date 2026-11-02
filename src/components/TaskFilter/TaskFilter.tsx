import type { TaskFilterProps, Filter } from "../types";

const filters:  Filter[] = ["all", "todo", "in-progress", "done"];
// the filter name can be the unique key/ 
export default function TaskFilter({ current, onChange }: TaskFilterProps) {
    return (
        <div> {filters.map((f) => (<button key={f} className={f === current ? "active" : ""} onClick={() => onChange(f)}>
            {f}
        </button>
        ))}
        </div>
    );
}