function MyInput(props) {
    const { label, OnChange, disabled, required, min, max, type , value} = props
    return <input placeholder={label} disabled={disabled} onChange={OnChange} type={type} value={value}  />
}



export {MyInput};