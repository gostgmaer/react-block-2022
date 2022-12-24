import logo from "./logo.svg";
import "./App.css";
import { Fragment, React } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import Navigation from "./Utils/Routing/Navigation";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header></Header>
        <Navigation></Navigation>
        <Footer></Footer>
      </div>
      <ToastContainer></ToastContainer>
    </Fragment>
  );
}

export default App;
