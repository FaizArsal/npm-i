function MyButton(props) {
    const { label, onClick , ClassName} = props
    return (
    <div>
        <button className={`btn ${ClassName}`} onClick={onClick}>{label}</button>
    </div>)

}
export {MyButton,}