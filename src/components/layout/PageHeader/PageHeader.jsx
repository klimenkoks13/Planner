import styles from "./PageHeader.module.css";

function PageHeader({ title, eyebrow, children, ...rest }) {
  return (
    <header {...rest}>
      <div className={styles["title-wrapper"]}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
      </div>
      {children && <div className={styles["action-wrapper"]}>{children}</div>}
    </header>
  );
}

export default PageHeader;
