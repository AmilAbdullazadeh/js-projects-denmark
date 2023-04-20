import axios from "axios";
import { useEffect, useState } from "react";
import s from "./App.module.css";
import { ImageList } from "./components/ImageList";
import { useScrollPosition } from "./hooks/useScrollPosition";
export function App() {
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImagesByPage(pageNumber)
  }, [pageNumber]);

  useEffect(() => {
    console.log(isBottom);
    if (isBottom) {
      increasePage();
    }
  }, [isBottom]);

  // setIsLoading
  async function fetchImagesByPage(pageNumber) {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  function increasePage() {
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Download random open source images</h2>
      {imageList && <ImageList imageList={imageList} />}
      {isLoading && <div className="spinner-border" role="status" />}
    </div>
  );
}
