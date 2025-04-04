import './Button.scss'
import { IButtonProps } from '../../interfaces/Ibutton/IButtonProps'

const Button: React.FC<IButtonProps> = ({buttonText, type, onClick}) => {
    return (
        <button className="btn" type={type} onClick={onClick}>{buttonText}</button>
    )
}

export default Button