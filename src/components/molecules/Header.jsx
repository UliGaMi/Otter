import Logo from '../atoms/Logo'

function Header() {
    return ( 
        <div className="div-header">
            <div className='div-header-logo'>
                <Logo clase={'img-header-logo'}></Logo>
                <h1 className='h1-header-logo'>OTTER</h1>
            </div>


            <button className='btn-header'>

            </button>

        </div>
     );
}

export default Header;