import Checkbox from "../../../components/ui/Checkbox/Checkbox";
import Button from "../../../components/ui/Button/Button";
import TrashIcon from "../../../components/ui/Icons/TrashIcon";
import styles from "./TaskItem.module.css";

function TaskItem({ title, isDone, onToggle, onDelete, className, ...rest }) {
  const classes = [className, styles["task-item"], isDone ? styles["done"] : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={classes} {...rest}>
      <label className={styles["title-wrapper"]}>
        <Checkbox checked={isDone} onChange={onToggle} />
        <span>{title}</span>
      </label>
      <Button
        variant="ghost"
        leftIcon={<TrashIcon size="var(--icon-sm)" className={styles.icon} />}
        onClick={onDelete}
        aria-label={`Delete task: ${title}`}
      />
    </li>
  );
}

export default TaskItem;
