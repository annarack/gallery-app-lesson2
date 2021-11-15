import styles from "./GalleryItem.module.css";
import Image from "./Image.js";
import Quote from "./Quote.js";

export default function GalleryItem({ itemData }) {
  return (
    <div className={styles.container}>
      {itemData.type === "img" ? (
        <Image itemData={itemData} />
      ) : (
        <Quote itemData={itemData}></Quote>
      )}
    </div>
  );
}
