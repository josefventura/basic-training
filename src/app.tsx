import { AppProvider } from "./context/context";
import Home from "./pages/home"

const App = () => {
  return (
    <AppProvider>
        <Home/>
    </AppProvider>
  );
}

export default App