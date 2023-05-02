import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./Components/introPage/IntroPage";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import MainPage from "./Components/MainPage/MainPage";
import HiddenGemPage from "./Components/HiddenGemPage/HiddenGemPage";
import HiddenGemSingle from "./Components/HiddenGemPage/HiddenGemSingle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IntroPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<MainPage />} path="/main" />
        <Route element={<HiddenGemPage />} path="/secret" />
        <Route element={<HiddenGemSingle />} path="/secret/:secretId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
