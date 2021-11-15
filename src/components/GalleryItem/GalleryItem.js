import "./GalleryItem.css";

export default function GalleryItem({ itemData }) {
  return (
    <div className="itemContainer">
      <img className="image" src={itemData.src} alt="" />
      <h2>Title: {itemData.title}</h2>
      <p>Published by: {itemData.info}</p>
    </div>
  );
}
