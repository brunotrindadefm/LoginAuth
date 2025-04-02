import './Button.scss'
import { IButtonProps } from '../../interfaces/Ibutton/IButtonProps'

const Button: React.FC<IButtonProps> = ({buttonText, onClick}) => {
    return (
        <button className="btn" onClick={onClick}>{buttonText}</button>
    )
}

export default Button