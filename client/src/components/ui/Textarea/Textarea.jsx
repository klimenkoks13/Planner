import styles from "./Textarea.module.css";
function Textarea({ className, placeholder, ...rest }) {
  const classes = [className, styles.textarea].filter(Boolean).join(" ");
  return (
    <textarea
      placeholder={placeholder}
      className={classes}
      {...rest}
    ></textarea>
  );
}

export default Textarea;
