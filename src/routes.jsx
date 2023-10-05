import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/Main/main";
import { ProtectedRoute } from "./components/protector-route";
import { MyPlaylist } from "./pages/MyPlaylist/myPlaylist";
import { NotFound } from "./pages/notFound";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import { Category } from "./pages/Category/category";
export const AppRoutes = ({
  isLoading,
  currentTrack,
  setCurrentTrack,
  tracks,
}) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem("user"))} />
        }
      >
        <Route
          path="/"
          element={
            <MainPage
              isLoading={isLoading}
              setCurrentTrack={setCurrentTrack}
              tracks={tracks}
            />
          }
        />
        <Route
          path="/myplaylist"
          element={<MyPlaylist setCurrentTrack={setCurrentTrack} />}
        />
        <Route
          path="/item/:id"
          element={
            <Category
              isLoading={isLoading}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              tracks={tracks}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
