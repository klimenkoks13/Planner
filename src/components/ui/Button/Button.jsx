import styles from "./Button.module.css";

function Button({
  variant = "primary",
  fullWidth = false,
  isDisabled = false,
  type = "button",
  leftIcon,
  rightIcon,
  onClick,
  children,
  ...rest
}) {
  const iconOnly = !children && Boolean(leftIcon || rightIcon);
  const iconPosition = iconOnly
    ? "only"
    : leftIcon
    ? "start"
    : rightIcon
    ? "end"
    : undefined;

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${
        isDisabled ? styles["disabled"] : ""
      } ${fullWidth ? styles["full-width"] : ""}`}
      disabled={isDisabled}
      data-icon={iconPosition}
      onClick={onClick}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

export default Button;
