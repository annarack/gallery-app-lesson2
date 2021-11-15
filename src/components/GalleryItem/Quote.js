import styles from "./GalleryItem.module.css";

export default function Quote({ itemData }) {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quote}>{itemData.quote}</div>
      <div className={styles.author}>{itemData.author}</div>
    </div>
  );
}
