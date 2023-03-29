import "../../assets/styles/LabelInput.css"

function LabelInput({name, type, label, id}) {
    return ( 
        <div className="div-labelinput">
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} />
        </div>
     );
}

export default LabelInput;