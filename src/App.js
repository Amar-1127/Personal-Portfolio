import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './Components/Home/NavBar';
import Home from './Components/Home/HomeScreen/Index';
import MainSection from './Components/Home/MainSection';
import MyPortfolio from './Components/Home/MyPortfolio';
import AboutMe from './Components/Home/AboutMe';
import ContactMe from './Components/Home/ContactMe';
import Footer from './Components/Home/Footer';

const basename = process.env.NODE_ENV === "production" ? "/Personal-Portfolio" : "/";

function App() {
  return (
    <div className="App">
      <Router basename={basename} >
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route> 
            <Route path="/MainSection" element={<MainSection />}></Route>
            <Route path="/MyPortfolio" element={<MyPortfolio />}></Route>
            <Route path="/AboutMe" element={<AboutMe />}></Route>
            <Route path="/ContactMe" element={<ContactMe />}></Route>
            {/* <Route path="*" element={<div>404 Not Found</div>}></Route> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
