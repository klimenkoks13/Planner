import styles from "./SectionHeader.module.css";

function SectionHeader({ header, counter }) {
  return (
    <div className={styles["section-wrapper"]}>
      <h3 className={styles.header}>{header}</h3>
      <span className={styles.counter}>{counter}</span>
    </div>
  );
}

export default SectionHeader;
