import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import ContextProvider from "./context/context";

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <RoutesApp />
      </ContextProvider>
    </BrowserRouter>
  )
};
