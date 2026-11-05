import styles from "./Checkbox.module.css";

function Checkbox({ ...rest }) {
  return <input className={styles.checkbox} type="checkbox" {...rest} />;
}
export default Checkbox;
