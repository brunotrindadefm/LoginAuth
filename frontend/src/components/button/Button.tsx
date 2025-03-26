import './Button.scss'
import { IButtonProps } from './IButtonProps'

const Button: React.FC<IButtonProps> = ({buttonText}) => {
    return (
        <button className="btn">{buttonText}</button>
    )
}

export default Button