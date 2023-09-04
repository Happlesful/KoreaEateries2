import "./App.css";
import { SharedStateProvider } from "./SharedStateContext";
import { Navbar, Sidebar, Body } from "./components";
import { Home, Restaurants } from "./pages";

function App() {
  return (
    <>
      <SharedStateProvider>
        <Navbar />
        <Sidebar />
        <Body />
      </SharedStateProvider>
    </>
  );
}

export default App;
