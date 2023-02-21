import Logo from '../atoms/Logo'
import '../../assets/styles/Header.css'
function Header({enlaces}) {
    return ( 
        <header>
            <div className='div-header-logo'>
                <Logo clase={'img-header-logo'}></Logo>
                <h1 className='h1-header-logo'>OTTER</h1>
            </div>


            <button className='btn-header'>Menú</button>
            <aside>
                {
                    
                }
            </aside>

        </header>
     );
}

export default Header;