import { useContext, useEffect} from "react";
import UserContext from "../../contexts/userContext";
import MenuContext from "../../contexts/menuContext";
import EnlacesContext from "../../contexts/enlacesContext";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/DropDown.css'

function DropDown() {
  
  const navigate = useNavigate();
  const {menu, setMenu} = useContext(MenuContext);
  const {isLoged, setIsLoged} = useContext(UserContext);
  const {enlaces} = useContext(EnlacesContext);

  useEffect(() => {
    const menuD = document.getElementById("menu");
    if(menu)
    {
      menuD.style.display= "flex";
    }
    else
    {
      menuD.style.display = "none";
    }
  },[menu])

  return (
    <ul id="menu" className="ul-dropdown">
      {
        enlaces.map(item => {
        if(item.isLoged === isLoged && item.nombre !== 'Cerrar sesión'){
          return (
            <li key={item.id}>
              <button key={item.id} onClick={()=>{
                setMenu(false);
                navigate(`${item.url}`);
              }}>{item.nombre}</button>
            </li>
          );
        }
        else{
          if(item.nombre === 'Cerrar sesión' && isLoged){
            return (
              <li key={item.id}>
                <button key={item.id}
                  onClick={() => {
                    setIsLoged(false);
                    setMenu(false);
                    navigate(`${item.url}`);
                  }}>{item.nombre}</button>
              </li>
            );
          }
          else{
            return;
          }
        }
      })
      }
    </ul>
  );
}

export default DropDown;
