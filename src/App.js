import "./App.css";
import { SharedStateProvider } from "./SharedStateContext";
import { Navbar, Sidebar, Body, Footer } from "./components";
import { Home, Restaurants } from "./pages";

function App() {
  return (
    <>
      <SharedStateProvider>
        <Navbar />
        <Sidebar />
        <Body />
        <Footer />
      </SharedStateProvider>
    </>
  );
}

export default App;
