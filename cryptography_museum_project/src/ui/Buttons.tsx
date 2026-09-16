import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconSrc?: string;
};

export function PrimaryButton({ className = "", iconSrc, children, disabled, ...rest }: Props) {
  return (
    <button
      className={`${styles.btn} ${styles.fill} ${disabled ? styles.disabled : ""} ${className}`}
      disabled={disabled}
      type={rest.type ?? "button"}
      {...rest}
    >
      {children}
      {iconSrc ? <img className={styles.icon} src={iconSrc} alt="" /> : null}
    </button>
  );
}

export function GhostButton({ className = "", iconSrc, children, disabled, ...rest }: Props) {
  return (
    <button
      className={`${styles.btn} ${styles.ghost} ${disabled ? styles.disabled : ""} ${className}`}
      disabled={disabled}
      type={rest.type ?? "button"}
      {...rest}
    >
      {children}
      {iconSrc ? <img className={styles.icon} src={iconSrc} alt="" /> : null}
    </button>
  );
}
