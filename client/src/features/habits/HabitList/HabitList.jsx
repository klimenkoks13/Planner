import styles from "./HabitList.module.css";
import Card from "../../../components/ui/Card/Card";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";
import InputWithSubmit from "../../../components/ui/InputWithSubmit/InputWithSubmit";
import { PlusIcon } from "../../../components/ui/Icons";
import HabitItem from "../HabitItem/HabitItem";

function HabitList({
  className,
  habits,
  onAdd,
  onToggle,
  onDelete,
  doneCount,
  totalCount,
  ...rest
}) {
  return (
    <Card className={className} {...rest}>
      <SectionHeader header="habits" done={doneCount} total={totalCount} />

      <ul className={styles["habits-wrapper"]}>
        {habits.map((habit) => (
          <HabitItem
            key={habit.id}
            title={habit.title}
            streak={habit.streak}
            isDone={habit.is_done}
            onToggle={() => onToggle(habit.id)}
            onDelete={() => onDelete(habit.id)}
          />
        ))}
      </ul>

      <InputWithSubmit
        className={styles["new-habit-input"]}
        placeholder="Add new habit..."
        icon={<PlusIcon />}
        submitLabel="Add new habit"
        onSubmit={onAdd}
      />
    </Card>
  );
}

export default HabitList;
