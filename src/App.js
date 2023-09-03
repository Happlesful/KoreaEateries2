import "./App.css";
import { SharedStateProvider } from "./SharedStateContext";
import { Navbar, Sidebar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <SharedStateProvider>
        <Navbar />
        <Sidebar />
        <Home />
      </SharedStateProvider>
    </>
  );
}

export default App;
