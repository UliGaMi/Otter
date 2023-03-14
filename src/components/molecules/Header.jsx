import { useContext} from "react";
import { Turn as Hamburger } from 'hamburger-react'
import MenuContext from "../../contexts/menuContext";
import Logo from '../atoms/Logo'
import DropDown from '../atoms/DropDown'
import '../../assets/styles/Header.css'


function Header() {
    const {menu, setMenu} = useContext(MenuContext);
    return ( 
    <>
    <div className='div-header-container'>
        <div className='div-header-logo'>
            <Logo clase={'img-header-logo'}></Logo>
            <h1 className='h1-header-logo'>Otter</h1>
        </div>

        <div className='div-header-menu'>
        <Hamburger direction="right" onToggle={toggled => {
            if (toggled) {
                setMenu(!menu);
            } else {
                setMenu(!menu);
            }
        }}/>
        </div>
    </div>
    <DropDown></DropDown>
        

    </>
     );
}

export default Header;