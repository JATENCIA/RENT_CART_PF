import "./App.css";
import RouteApp from "./routes/RouteApp";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar"

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
