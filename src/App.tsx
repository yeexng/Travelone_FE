import "bootstrap/dist/css/bootstrap.min.css";
import IntroPage from "./Components/introPage/IntroPage";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import MainPage from "./Components/MainPage/MainPage";
import HiddenGemPage from "./Components/HiddenGemPage/HiddenGemPage";
import HiddenGemSingle from "./Components/HiddenGemPage/HiddenGemSingle";

function App() {
  return (
    <>
      <div>
        <HiddenGemSingle />
        {/* <HiddenGemPage /> */}
        {/* <MainPage /> */}
        {/* <LoginPage /> */}
        {/* <RegistrationPage /> */}
        {/* <IntroPage /> */}
      </div>
    </>
  );
}

export default App;
