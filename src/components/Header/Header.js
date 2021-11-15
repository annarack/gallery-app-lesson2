import styles from "./Header.module.css";
export default function Header(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );
}
