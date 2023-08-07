import { useParams } from "react-router-dom";
import { playlist } from "../components/playlist";

export const Item = () => {
  const params = useParams();
  const play = playlist.find((item) => item.id === Number(params.id));
  return (
    <div>
      <p>Page:{play.id}</p>
    </div>
  );
};
