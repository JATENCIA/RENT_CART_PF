import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import LandingPage from "../Components/LandingPage/LandingPage";

function RouteApp() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="about" element={<About />} />
        {/* <Route exact path="home" element={<Home />} />          
          <Route exact path="details/:id" element={<Details />} />
          <Route exact path="create" element={<Create />} />
          <Route exact path="fleet" element={<Fleet />} />
          <Route exact path="offers" element={<Offers />} />
          <Route  exact path="contact" element={<Contac />} />
          <Route exact path="blog" element={<Blog />} /> */}
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouteApp;
