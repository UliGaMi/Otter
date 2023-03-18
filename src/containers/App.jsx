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
import UltimoHistContext from "../contexts/ultimoHistContext.js";
import KCContext from "../contexts/kcContext.js";
import LengthContext from "../contexts/lengthContext.js";
import TokenContext from "../contexts/tokenContext.js";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import LandingPage from "../pages/LandingPage";
import Bienvenido from "../pages/Bienvenido";
import HistorialPaciente from "../pages/HistorialPaciente.jsx";
import Configuracion from "../pages/Configuracion";
import NuevoPaciente from "../pages/NuevoPaciente";
import Tablas from "../pages/Tablas.jsx";
import CalcularKC from "../pages/CalcularKC.jsx";
import CalcularEquivalentes from "../pages/CalcularEquivalentes.jsx";
import ProtectedParentRoute from './ProtectedParentRoute';
import "../assets/styles/App.css";

function App() {
  const [token, setToken] = useState(null);
  const [nutriologo, setNutriologo] = useState({});
  const [paciente, setPaciente] = useState(null);
  const [length, setLength] = useState(0);
  const [ultimoHist, setUltimoHist] = useState(null);
  const [kc, setKC] = useState(null);
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
        <UltimoHistContext.Provider value={{ultimoHist, setUltimoHist}}>
        <KCContext.Provider value={{kc, setKC}}>
        <LengthContext.Provider value={{length, setLength}}>
        <TokenContext.Provider value={{token, setToken}}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectedParentRoute isLoged={isLoged}/>}>
              <Route path="/bienvenido" element={<Bienvenido nutriologo={nutriologo}/>} />
              <Route path="/nuevopaciente" element={<NuevoPaciente/>}/>
              <Route path="/configuracion" element={<Configuracion/>}/>
              <Route path="/historiales" element={<HistorialPaciente nutriologo={nutriologo}/>}/>
              <Route path="/tablas" element={<Tablas nutriologo={nutriologo}/>}/>
              <Route path="/calcularkc" element={<CalcularKC paciente={paciente}/>}/>
              <Route path="/calcularequivalentes" element={<CalcularEquivalentes/>}/>
            </Route>
          </Routes>
          </TokenContext.Provider>
          </LengthContext.Provider>
          </KCContext.Provider>
          </UltimoHistContext.Provider>
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
