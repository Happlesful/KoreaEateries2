import "./App.css";
import { SharedStateProvider } from "./SharedStateContext";
import { Navbar, Sidebar, Body, Footer, Progressionbar } from "./components";
import { Home, Restaurants } from "./pages";

function App() {
  return (
    <>
      <SharedStateProvider>
        <Progressionbar />
        <Navbar />
        <Sidebar />
        <Body />
        <Footer />
      </SharedStateProvider>
    </>
  );
}

export default App;
