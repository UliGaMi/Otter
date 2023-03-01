import { useNavigate } from 'react-router-dom';

function ButtonAside({img, label, url}) {
    const navigate = useNavigate();
    return ( 
        <button onClick={() => {navigate(`${url}`);}}>
            <img src={img}/>
            <label>{label}</label>
        </button>
     );
}

export default ButtonAside;