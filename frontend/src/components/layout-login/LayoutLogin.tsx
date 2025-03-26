import './LayoutLogin.scss'
import Button from "../button/Button";
import Input from "../input/Input";
import { BiAperture } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { ILayoutLoginProps } from './ILayoutLoginProps';
import { motion } from 'framer-motion';

const LayoutLogin: React.FC<ILayoutLoginProps> = ({ onToggleRegister }) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showRegisterInputs, setShowRegisterInputs] = useState<boolean>(false);

    useEffect(() => {
        console.log('username: ', username)
        console.log('password: ', password)
        console.log(showPassword)
        console.log("Show register input", showRegisterInputs)
    }, [username, password, showPassword, showRegisterInputs])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, height: "auto" }}
            animate={{ opacity: 1, scale: 1, height: "auto" }}
            exit={{ opacity: 0, scale: 0.9, height: "auto" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="layout-login"
        >
            <header className='login-header'>
                <BiAperture size={80} color='red' />
                <h1>BTAuth</h1>
            </header>
            <h2>Login</h2>
            <div className='container-input'>
                <div>
                    <Input type='text' placeholder='Username' onChangeValue={setUsername} />
                    <FaRegUser size={20} />
                </div>
                <div>
                    <Input type={showPassword ? 'text' : 'password'} placeholder='Password' onChangeValue={setPassword} />
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ?
                            <IoEyeOutline size={21} />
                            :
                            <IoEyeOffOutline size={21} />
                        }
                    </span>
                </div>
            </div>
            <Button buttonText='Login' />
            <span className='register' onClick={onToggleRegister}>Register</span>
        </motion.div>
    );
}

export default LayoutLogin