import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {enlaces} from "../data/enlacesDropDown.js";
import NutriologoContext from "../contexts/nutriologoContext";
import UserContext from "../contexts/userContext";
import MenuContext from "../contexts/menuContext";
import EnlacesContext from "../contexts/enlacesContext";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import LandingPage from "../pages/LandingPage";
import Bienvenido from "../pages/Bienvenido";
import Configuracion from "../pages/Configuracion";
import NuevoPaciente from "../pages/NuevoPaciente";
import ProtectedParentRoute from './ProtectedParentRoute';
import "../assets/styles/App.css";

function App() {
  const [nutriologo, setNutriologo] = useState({});
  const [menu, setMenu] = useState(false);
  const [isLoged, setIsLoged] = useState(false);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isLoged, setIsLoged }}>
        <EnlacesContext.Provider value={{enlaces}}>
        <MenuContext.Provider value={{menu, setMenu}}>
        <NutriologoContext.Provider value={{nutriologo, setNutriologo}}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectedParentRoute isLoged={isLoged}/>}>
              <Route path="/bienvenido" element={<Bienvenido nutriologo={nutriologo}/>} />
              <Route path="/nuevopaciente" element={<NuevoPaciente/>}/>
              <Route path="/configuracion" element={<Configuracion/>}/>
            </Route>
          </Routes>
          </NutriologoContext.Provider>
          </MenuContext.Provider>
        </EnlacesContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
