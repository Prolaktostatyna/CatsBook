import "./App.scss";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <Nav />
      <Main />
      <Footer />
    </StoreProvider>
  );
}

export default App;
