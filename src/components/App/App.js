import "./App.css";
import Header from "../Header/Header.js";
import GalleryItem from "../GalleryItem/GalleryItem";
import { data } from "../../galleryEntries.js";

export default function App() {
  return (
    <div className="app">
      <Header />
      {data.map((element) => (
        <GalleryItem key={element.title} itemData={element} />
      ))}
    </div>
  );
}
