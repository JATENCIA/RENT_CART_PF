import "./App.css";
import RouteApp from "./routes/RouteApp";
import Footer from "./Footer/Footer";
import NavBar from  './NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar/>
      <RouteApp />
      <Footer />
    </>
  );
}

export default App;
