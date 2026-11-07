import Checkbox from "../../../components/ui/Checkbox/Checkbox";
import Button from "../../../components/ui/Button/Button";
import styles from "./HabitItem.module.css";
import { TrashIcon, PencilIcon, FireIcon } from "../../../components/ui/Icons";

function HabitItem({
  title,
  streak,
  isDone,
  onToggle,
  onDelete,
  onEdit,
  className,
  ...rest
}) {
  const classes = [className, styles["habit-item"]].filter(Boolean).join(" ");

  return (
    <li className={classes} {...rest}>
      <label className={styles["title-wrapper"]}>
        <Checkbox checked={isDone} onChange={onToggle} />
        <span>{title}</span>
        <div className={styles["streak-wrapper"]}>
          {streak !== 0 && (
            <>
              <FireIcon size="var(--icon-xs)" className={styles["fire-icon"]} />
              <span className={styles["seria-count"]}>{streak}</span>
            </>
          )}
        </div>
      </label>

      <div className={styles["buttons-wrapper"]}>
        <Button
          variant="ghost"
          leftIcon={
            <PencilIcon size="var(--icon-sm)" className={styles.icon} />
          }
          onClick={onEdit}
        ></Button>
        <Button
          variant="ghost"
          leftIcon={<TrashIcon size="var(--icon-sm)" className={styles.icon} />}
          onClick={onDelete}
        ></Button>
      </div>
    </li>
  );
}

export default HabitItem;
