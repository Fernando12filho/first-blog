import "./button.css"

interface ButtonProps{
    label: string;
}

function Button({label} : ButtonProps){
    return(
        <button type="submit">{label}</button>
    )
}

export default Button;