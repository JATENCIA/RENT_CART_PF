import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Home from "../Components/Home/Home";
import LandingPage from "../Components/LandingPage/LandingPage";
import Contact from "../pages/Contact/Contact";
import FaqSection from "../pages/FaqSection/FaqSection";
import Details from "../Components/Details/Details";
//Dashboard perfil de usuario
import LayoutProfile from "../LayoutProfile/LayoutProfile";
import MyDates from "../LayoutProfile/pages/MyDates";
import Bookings from "../LayoutProfile/pages/Bookings";
import Favorites from "../LayoutProfile/pages/Favorites";
import Reviews from "../LayoutProfile/pages/Reviews";
// Login
import Login from "../Components/Auth/Login/Login";
import Register from "../Components/Auth/Register/Register";
import ForgetPassword from "../Components/Auth/ForgetPassword/ForgetPassword";
// Dashboard Admin
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import Homes from "../LayoutAdmin/pages/Homes";
import Users from "../LayoutAdmin/pages/Users";

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
        {/* Configuración de rutas iniciar sesion */}
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
        <Route exact path="recover-password" element={<ForgetPassword />} />
        {/* Configuración de rutas del perfil de usuario*/}
        <Route path="/profile" element={<LayoutProfile />}>
          <Route index element={<MyDates />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* Configuración de rutas del Dashboard */}
        <Route path="/auth-admin" element={<LayoutAdmin />}>
          <Route index element={<Homes />} />
          <Route path="users" element={<Users />} />
        </Route>
        {/* Configuración de ruta 404 error */}
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouteApp;
