import HomePage from "./Page/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <div className="mb-28  lg:mb-0">
        <Navbar />
      </div>
      <HomePage />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
