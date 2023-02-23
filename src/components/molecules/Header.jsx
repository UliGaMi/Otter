import Logo from '../atoms/Logo'
import '../../assets/styles/Header.css'
import { Turn as Hamburger } from 'hamburger-react'

function Header({enlaces}) {
    return ( 
    <div className='div-header-container'>
        <div className='div-header-logo'>
            <Logo clase={'img-header-logo'}></Logo>
            <h1 className='h1-header-logo'>OTTER</h1>
        </div>

        <div className='div-header-menu'>
        <Hamburger direction="right" onToggle={toggled => {
  if (toggled) {
    
     // open a menu
  } else {
     // close a menu
  }
}}/>
        </div>
    </div>
     );
}

export default Header;