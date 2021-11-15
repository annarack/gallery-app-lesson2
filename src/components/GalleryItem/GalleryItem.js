import styles from "./GalleryItem.module.css";

export default function GalleryItem({ itemData }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={itemData.src} alt="" />
      <div className={styles.infoContainer}>
        <div className={styles.title}>Title: {itemData.title}</div>
        <div className={styles.publisher}>Published by: {itemData.info}</div>
      </div>
    </div>
  );
}
