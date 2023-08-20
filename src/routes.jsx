import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/Main/main";
import { ProtectedRoute } from "./components/protector-route";
import { Item } from "./pages/item";
import { MyPlaylist } from "./pages/myPlaylist";
import { NotFound } from "./pages/notFound";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
export const AppRoutes = ({
  isLoading,
  tracks,
  isOpen,
  setIsOpen,
  currentTrack,
  setCurrentTrack,
  trackTime,
  setTrackTime,
}) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(localStorage.getItem("user"))} />}>
        <Route
          path="/"
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
