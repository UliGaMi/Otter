import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {enlaces} from "../data/enlacesDropDown.js";
import UserContext from "../contexts/userContext";
import MenuContext from "../contexts/menuContext";
import EnlacesContext from "../contexts/enlacesContext";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import LandingPage from "../pages/LandingPage";
import PerfilNutriologo from "../pages/PerfilNutriologo";
import ProtectedParentRoute from './ProtectedParentRoute';
import "../assets/styles/App.css";

function App() {
  const [menu, setMenu] = useState(false);
  const [isLoged, setIsLoged] = useState(false);
  console.log({enlaces});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isLoged, setIsLoged }}>
        <EnlacesContext.Provider value={{enlaces}}>
        <MenuContext.Provider value={{menu, setMenu}}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectedParentRoute isLoged={isLoged}/>}>
              <Route path="/perfil" element={<PerfilNutriologo />} />
            </Route>
          </Routes>
          </MenuContext.Provider>
        </EnlacesContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
