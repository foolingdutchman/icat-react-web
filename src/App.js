import "./App.css";
import Action from "./view/Action";
import Airdrop from "./view/Airdrop";
import Discription from "./view/Discription";
import Features from "./view/Features";
import Footer from "./view/Footer";
import Header from "./view/Header";
import HomeSlider from "./view/HomeSlider";
import RoadMapBanner from "./view/RoadMapBanner";
import Subscirbe from "./view/Subscribe";
import TimeLine from "./view/TimeLine";

function App() {
  return (
    <>
      <Header />
      <HomeSlider />
      <Discription />
      <Action />
      <Features />
      <RoadMapBanner />
      <TimeLine />
      <Airdrop />
      <Subscirbe />
      <Footer/>
    </>
  );
}

export default App;
