import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layout
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";
//pages auth
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
//pages admin
import Home from "./pages/admin/Home";
import Users from "./pages/admin/Users";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;