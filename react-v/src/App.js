import About from "./components/About/About";
import BlockOfWatches from "./components/BlockOfWatches/BlockOfWatches";
import BlockOne from "./components/BlockOne/BlockOne";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OurBrands from "./components/OurBrands/OurBrands";
import WatchesBlock from "./components/WatchesBlock/WatchesBlock";

function App() {
  return (
    <div className="App">
        <Header />
        <BlockOne />
        <WatchesBlock />
        <BlockOfWatches />
        <OurBrands />
        <About />
        <Footer />
    </div>
  );
}

export default App;
