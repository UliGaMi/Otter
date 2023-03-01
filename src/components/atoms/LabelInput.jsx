function LabelInput({name, type, label, id}) {
    return ( 
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} />
        </div>
     );
}

export default LabelInput;