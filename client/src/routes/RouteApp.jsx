import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Home from "../Components/Home/Home";
import LandingPage from "../Components/LandingPage/LandingPage";
import Contact from "../pages/Contact/Contact";
import FaqSection from "../pages/FaqSection/FaqSection";
import Details from "../Components/Details/Details";

function RouteApp() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="faq" element={<FaqSection />} />
        <Route exact path="detail/:id" element={<Details />} />

        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouteApp;
