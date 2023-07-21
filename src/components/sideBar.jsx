import { BarItem } from "./barItem";
import { useEffect, useState } from "react";
import { SkeletonItem } from "./sceleton";
export function SideBar() {
  const [isLoading, setLoading] = useState([]);
  const [songs, setPosts] = useState(false);
  useEffect(() => {
    setLoading(true);
    const time = setTimeout(() => {
      setPosts(songs);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(time);
  }, []);
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          {isLoading && <SkeletonItem />}
          {!isLoading && <BarItem />}
        </div>
      </div>
    </div>
  );
}
