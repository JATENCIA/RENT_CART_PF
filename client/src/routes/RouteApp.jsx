import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound.jsx";
import About from "../pages/About/About.jsx";
import Home from "../Components/Home/Home.jsx";
import LandingPage from "../Components/LandingPage/LandingPage.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import FaqSection from "../pages/FaqSection/FaqSection.jsx";
import Details from "../Components/Details.jsx";

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
