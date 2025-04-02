import './Input.scss'
import { IInputProps } from '../../interfaces/Iinput/IInputProps';

const Input = ({type, placeholder, onChangeValue}: IInputProps) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onChangeValue(value)
    }
    return (
        <input type={type} placeholder={placeholder} onChange={handleInputChange} />
    )
}

export default Input