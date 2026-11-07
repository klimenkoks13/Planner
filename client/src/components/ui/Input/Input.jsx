import styles from "./Input.module.css";

function Input({ type = "text", placeholder, ...rest }) {
  return (
    <input
      type={type}
      className={`${styles.input} `}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default Input;
