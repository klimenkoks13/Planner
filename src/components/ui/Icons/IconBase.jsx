import "./icons.css";

export default function IconBase({
  size,
  style,
  className,
  children,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={["icon", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size, ...style }}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}
