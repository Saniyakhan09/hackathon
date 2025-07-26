import React from "react";
import "./app.css";
import Header from "./Header/Header.jsx";
import Hero from "./Header/Hero.jsx";
import Swipper from "./Component/Swipper.jsx";
import SplitBanner from "./Component/SplitBanner.jsx";
import BestSellers from "./page1/BestSeller.jsx";
import Catogary from "./page1/Catogary.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer/footer.jsx"; 
import BestSellers2 from "./page1/BestSeller2.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Swipper />
              <SplitBanner />
        <BestSellers />
        <BestSellers2 />
              <Footer />

            </>
          }
        />
        <Route path="/category" element={<Catogary />} />
      </Routes>
      
    </>
  );
};

export default App;
