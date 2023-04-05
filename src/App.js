import "./App.css";
import Services from "./components/Pages/Services";
import RecentNews from "./components/Pages/RecentNews";
import Testimonial from "./components/Pages/Testimoial";
import Navbar from "./components/Pages/Navbar";
import Footer from "./components/Pages/Footer";


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

      <div>
        <Navbar />
        <Services />
        <Testimonial />
        <RecentNews />
        <Footer />
      </div>
    
  );
}

export default App;
