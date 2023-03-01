function ButtonForm({handler, label}) {
    return ( 
        <button onClick={handler}>{label}</button>
     );
}

export default ButtonForm;