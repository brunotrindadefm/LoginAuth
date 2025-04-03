import './Button.scss'
import { IButtonProps } from '../../interfaces/Ibutton/IButtonProps'

const Button: React.FC<IButtonProps> = ({buttonText, type}) => {
    return (
        <button className="btn" type={type} >{buttonText}</button>
    )
}

export default Button