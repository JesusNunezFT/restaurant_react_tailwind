import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Entradas from "./pages/Entradas";
import Pecaditos from "./pages/pecaditos";
import Bebidas from "./pages/Bebidas";
import Especiales from "./pages/Especiales";
import PageNotFound from "./pages/pageNotFound";
import Ejemplo from "./pages/Ejemplo/Ejemplo";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/Entradas" element={<Entradas />} />
      <Route path="/Pecaditos" element={<Pecaditos />} />
      <Route path="/Bebidas" element={<Bebidas />} />
      <Route path="/Especiales" element={<Especiales />} />
      <Route path="/Ejemplo" element={<Ejemplo />} />
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
