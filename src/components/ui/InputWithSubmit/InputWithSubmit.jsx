import styles from "./InputWithSubmit.module.css";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";

function InputWithSubmit({
  placeholder,
  icon,
  submitLabel,
  onSubmit,
  ...rest
}) {
  return (
    <form className={styles["input-with-submit"]} onSubmit={onSubmit}>
      <Input placeholder={placeholder} aria-label={placeholder} {...rest} />
      <Button rightIcon={icon} type="submit" aria-label={submitLabel} />
    </form>
  );
}

export default InputWithSubmit;
