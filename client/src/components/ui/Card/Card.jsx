import styles from "./Card.module.css";

function Card({ className, children, ...rest }) {
  const classes = [className, styles.card].filter(Boolean).join(" ");
  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
}

export default Card;
