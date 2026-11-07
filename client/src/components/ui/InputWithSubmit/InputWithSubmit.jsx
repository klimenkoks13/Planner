import styles from "./InputWithSubmit.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";

function InputWithSubmit({
  placeholder,
  icon,
  submitLabel,
  onSubmit,
  className,
  ...rest
}) {
  const classes = [className, styles["input-with-submit"]]
    .filter(Boolean)
    .join(" ");

  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const clean = value.trim();
    if (!clean) return;
    onSubmit(clean);
    setValue("");
  }

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <Input
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
      <Button rightIcon={icon} type="submit" aria-label={submitLabel} />
    </form>
  );
}

export default InputWithSubmit;
