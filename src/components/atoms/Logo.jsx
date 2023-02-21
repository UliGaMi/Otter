import otter from '../../assets/imgs/otter.png'
function Logo({clase}) {
    return (  
        <img className={clase} src={otter} alt="Logo Otter" />
    );
}

export default Logo;