import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(window.innerHeight + window.scrollY >= document.body.offsetHeight);
    });
  }, []);

  return { isBottom }
}
