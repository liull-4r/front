import Header from "./Components/Header/Header";
import Alert from "./Components/Alert/Alert";
import "./commonResource/css/global.css";
import Ipad from "./Components/Ipad/Ipad";
import MacBook from "./Components/MackBook/MackBook";
import Iphone11pro from "./Components/Iphone11pro/Iphone11pro";
import Iphone11andCovid from "./Components/Iphone11&Covid/Iphone11&Covid";
import ActorandWatch from "./Components/Actor&Watch/Actor&Watch";
import ArcadeandAppleCard from "./Components/Arcade&AppleCard/Arcade&AppleCard";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Alert />
      <Ipad />
      <MacBook />
      <Iphone11pro />
      <Iphone11andCovid />
      <ActorandWatch />
      <ArcadeandAppleCard />
      <Footer />
    </>
  );
}

export default App;
