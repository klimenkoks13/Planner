import PageHeader from "../../components/layout/PageHeader/PageHeader";
import HabitList from "../../features/habits/HabitList/HabitList";
import Notes from "../../features/notes/Notes/Notes";
import TaskList from "../../features/tasks/TaskList/TaskList";
import styles from "./TodayPage.module.css";
import { useTasks } from "../../hooks/useTasks";
import { useHabits } from "../../features/habits/useHabits";
import { toDateKey } from "../../utils/date";

const today = new Date();
const title = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
}).format(today);

function TodayPage() {
  const dateKey = toDateKey(today);
  const {
    tasks,
    isLoading,
    error,
    doneTasksCount,
    totalTasksCount,
    addTask,
    toggleTask,
    deleteTask,
  } = useTasks(dateKey);

  const {
    habits,
    doneHabitsCount,
    totalHabitsCount,
    addHabit,
    toggleHabit,
    deleteHabit,
  } = useHabits();

  return (
    <div className={styles["today-page"]}>
      <PageHeader
        title={title}
        eyebrow={String(today.getFullYear())}
        className={styles.header}
      />

      <div className={styles["widgets-grid"]}>
        <TaskList
          className={styles["task-list"]}
          tasks={tasks}
          doneCount={doneTasksCount}
          totalCount={totalTasksCount}
          onAdd={addTask}
          onToggle={toggleTask}
          onDelete={deleteTask}
          isLoading={isLoading}
          error={error}
        />

        <HabitList
          className={styles["habit-list"]}
          habits={habits}
          onAdd={addHabit}
          onToggle={toggleHabit}
          onDelete={deleteHabit}
          doneCount={doneHabitsCount}
          totalCount={totalHabitsCount}
        />

        <Notes className={styles["notes"]} />
      </div>
    </div>
  );
}

export default TodayPage;
