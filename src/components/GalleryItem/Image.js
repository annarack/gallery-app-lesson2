import styles from "./GalleryItem.module.css";

export default function Image({ itemData }) {
  return (
    <>
      <img className={styles.image} src={itemData.src} alt="" />
      <div className={styles.infoContainer}>
        <div className={styles.title}>Title: {itemData.title}</div>
        <div className={styles.publisher}>Published by: {itemData.info}</div>
      </div>
    </>
  );
}
