import { BrowserRouter } from "react-router-dom";
import "./assets/styles/main.scss";
import Pages from "./pages/Pages";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Pages />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
