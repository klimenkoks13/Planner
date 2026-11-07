import styles from "./SectionHeader.module.css";

function SectionHeader({ header, done, total }) {
  return (
    <div className={styles["section-wrapper"]}>
      <h3 className={styles.header}>{header}</h3>
      {total && <span className={styles.counter}>{`${done}/${total}`}</span>}
    </div>
  );
}

export default SectionHeader;
