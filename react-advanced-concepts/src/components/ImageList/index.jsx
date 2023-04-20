import { ImageListItem } from "../ImageListItem";
import "./ImageList.css";

export function ImageList({ imageList }) {
  return imageList?.map((img) => <div key={img.id} className="card_item">
        <ImageListItem img={img} />
      </div>
    );
}
