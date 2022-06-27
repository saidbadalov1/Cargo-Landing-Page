import Announcement from "./components/Announcement";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stores from "./components/Stores";
import Tariffs from "./components/Tariffs";

function App() {
  return (
    <div>
      <Announcement/>
      <Header/>
      <Navbar/>
      <Hero/>
      <Tariffs/>
      <Calculator/>
      <Stores/>
      <Footer/>
    </div>
  );
}

export default App;
