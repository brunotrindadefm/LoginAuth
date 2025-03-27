import './LayoutLogin.scss'
import Button from "../button/Button";
import Input from "../input/Input";
import { BiAperture } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { ILayoutLoginProps } from './ILayoutLoginProps';
import { motion } from 'framer-motion';

const LayoutLogin: React.FC<ILayoutLoginProps> = ({ onToggleRegister }) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, height: "auto" }}
            animate={{ opacity: 1, scale: 1, height: "auto" }}
            exit={{ opacity: 0, scale: 0.8, height: "auto" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="layout-login"
        >
            <header className='login-header'>
                <BiAperture size={60} color='red' />
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