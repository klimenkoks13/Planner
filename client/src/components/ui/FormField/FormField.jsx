import styles from "./FormField.module.css";
import Input from "../ui/Input/Input";

function FormField({ label, id, placeholder, ...rest }) {
  return (
    <div className={styles["form-field"]}>
      <span className={styles.label} htmlFor={id}>
        {label}
      </span>
      <Input id={id} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default FormField;
