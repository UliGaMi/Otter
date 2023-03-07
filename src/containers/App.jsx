import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {enlaces} from "../data/enlacesDropDown.js";
import NutriologoContext from "../contexts/nutriologoContext";
import PacienteContext from "../contexts/pacienteContext.js";
import IsChangedContext from "../contexts/isChangedContext.js";
import IsDeletedContext from "../contexts/isDeletedContext.js";
import UserContext from "../contexts/userContext";
import MenuContext from "../contexts/menuContext";
import EnlacesContext from "../contexts/enlacesContext";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import LandingPage from "../pages/LandingPage";
import Bienvenido from "../pages/Bienvenido";
import HistorialPaciente from "../pages/HistorialPaciente.jsx";
import Configuracion from "../pages/Configuracion";
import NuevoPaciente from "../pages/NuevoPaciente";
import ProtectedParentRoute from './ProtectedParentRoute';
import "../assets/styles/App.css";

function App() {
  const [nutriologo, setNutriologo] = useState({});
  const [paciente, setPaciente] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isLoged, setIsLoged] = useState(false);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isLoged, setIsLoged }}>
        <EnlacesContext.Provider value={{enlaces}}>
        <MenuContext.Provider value={{menu, setMenu}}>
        <NutriologoContext.Provider value={{nutriologo, setNutriologo}}>
        <PacienteContext.Provider value={{paciente, setPaciente}}>
        <IsChangedContext.Provider value={{isChanged, setIsChanged}}>
        <IsDeletedContext.Provider value={{isDeleted, setIsDeleted}}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectedParentRoute isLoged={isLoged}/>}>
              <Route path="/bienvenido" element={<Bienvenido nutriologo={nutriologo}/>} />
              <Route path="/nuevopaciente" element={<NuevoPaciente/>}/>
              <Route path="/configuracion" element={<Configuracion/>}/>
              <Route path="/historiales" element={<HistorialPaciente nutriologo={nutriologo}/>}/>

            </Route>
          </Routes>
          </IsDeletedContext.Provider>
          </IsChangedContext.Provider>
          </PacienteContext.Provider>
          </NutriologoContext.Provider>
          </MenuContext.Provider>
        </EnlacesContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
