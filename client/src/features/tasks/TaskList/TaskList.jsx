import styles from "./TaskList.module.css";
import Card from "../../../components/ui/Card/Card";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";
import TaskItem from "../TaskItem/TaskItem";
import InputWithSubmit from "../../../components/ui/InputWithSubmit/InputWithSubmit";
import { PlusIcon } from "../../../components/ui/Icons";

function TaskList({
  className,
  tasks,
  doneCount,
  totalCount,
  onAdd,
  onToggle,
  onDelete,
  isLoading,
  error,
  ...rest
}) {
  return (
    <Card className={className} {...rest}>
      <SectionHeader header="tasks" done={doneCount} total={totalCount} />
      {isLoading && <p>Loading...</p>}
      {error && <p role="alert">Could not load tasks</p>}
      {!isLoading && !error && tasks.length === 0 && <p>No tasks for today</p>}
      <ul className={styles["tasks-wrapper"]}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            className={styles["task-wrapper"]}
            title={task.title}
            isDone={task.is_done}
            onToggle={() => onToggle(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </ul>

      <InputWithSubmit
        className={styles["new-task-input"]}
        placeholder="Add new task..."
        icon={<PlusIcon />}
        submitLabel="Add new task"
        onSubmit={onAdd}
      />
    </Card>
  );
}

export default TaskList;
