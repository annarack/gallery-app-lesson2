import styles from "./GalleryItem.module.css";

export default function GalleryItem({ itemData }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={itemData.src} alt="" />
      <h2>Title: {itemData.title}</h2>
      <p>Published by: {itemData.info}</p>
    </div>
  );
}
