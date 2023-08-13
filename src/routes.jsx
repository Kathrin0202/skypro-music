import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/Main/main";
import { ProtectedRoute } from "./components/protector-route";
import { Item } from "./pages/item";
import { Login } from "./pages/login";
import { MyPlaylist } from "./pages/myPlaylist";
import { NotFound } from "./pages/notFound";
import { Registration } from "./pages/registr";

export const AppRoutes = ({
  user,
  isLoading,
  tracks,
  isOpen,
  setIsOpen,
  currentTrack,
  setCurrentTrack,
}) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/main"
          element={
            <MainPage
              isLoading={isLoading}
              tracks={tracks}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
            />
          }
        />
        <Route path="/myplaylist" element={<MyPlaylist />} />
        <Route path="/item/:id" element={<Item />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
