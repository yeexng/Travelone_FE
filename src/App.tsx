import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./Components/introPage/IntroPage";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import MainPage from "./Components/MainPage/MainPage";
import HiddenGemPage from "./Components/HiddenGemPage/HiddenGemPage";
import HiddenGemSingle from "./Components/HiddenGemPage/HiddenGemSingle";
import SingleTrip from "./Components/MainPage/SingleTrip";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import ConnectionPage from "./Components/MainPage/ConnectionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IntroPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<ProfilePage />} path="/users/:userId" />
        <Route element={<MainPage />} path="/trips" />
        <Route element={<SingleTrip />} path="/trips/:tripId" />
        <Route element={<ConnectionPage />} path="/trips/:tripId/chat" />
        <Route element={<HiddenGemPage />} path="/secret" />
        <Route element={<HiddenGemSingle />} path="/secret/:secretId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
