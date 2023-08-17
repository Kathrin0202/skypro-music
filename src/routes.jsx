import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/Main/main";
import { ProtectedRoute } from "./components/protector-route";
import { Item } from "./pages/item";
import { Login } from "./pages/Login/login";
import { MyPlaylist } from "./pages/myPlaylist";
import { NotFound } from "./pages/notFound";
import { Registration } from "./pages/Registration/registr";

export const AppRoutes = ({
  user,
  isLoading,
  tracks,
  isOpen,
  setIsOpen,
  currentTrack,
  setCurrentTrack,
  trackTime,
  setTrackTime,
  setUser,
}) => {
  return (
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser} />} />
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
              trackTime={trackTime}
              setTrackTime={setTrackTime}
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
