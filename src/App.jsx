import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

import About from "./Pages/About";
import Team from "./Pages/Team";
import Header from "./Component/Header";
import Section from "./Component/Section";
import Secoundsection from "./Component/Secoundsection";
import ThirdSec from "./Component/ThirdSec";
import Spline from "@splinetool/react-spline";
import Fourthsection from "./Component/Fourthsection";
import FifthSection from "./Component/FifthSection";
import Sixthsec from "./Component/Sixthsec";
import Footer from "./Component/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header/>
      
      <Routes>
        <Route path="/" element={<Section/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        
      </Routes>
      <Secoundsection classname="mt-10"/>
      <ThirdSec/>
      <Fourthsection/>
      <FifthSection/>
      <Sixthsec/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
