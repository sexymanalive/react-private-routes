import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";
 
import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomeLayout } from "./components/HomeLayout";
import "./styles.css";
import Setting from "./pages/Setting";

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/hahaa" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<Setting/>} />
      </Route>
    </Routes>
  );
} 
