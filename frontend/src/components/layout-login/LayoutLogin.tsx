import './LayoutLogin.scss'
import Button from "../button/Button";
import Input from "../input/Input";
import { BiAperture } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { ILayoutLoginProps } from '../../interfaces/Ilayouts/ILayoutLoginProps';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';
import axios from 'axios';

const LayoutLogin: React.FC<ILayoutLoginProps> = ({ onToggleRegister }) => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, { email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data?.message || 'Erro ao fazer login');
            } else {
                console.log('Erro desconhecido');
            }
        }
    }


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, height: "auto" }}
            animate={{ opacity: 1, scale: 1, height: "auto" }}
            exit={{ opacity: 0, scale: 0.8, height: "auto" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="layout-login"
        >
            <header className='login-header'>
                <BiAperture size={60} color={theme.primaryColor} />
                <h1>BTAuth</h1>
            </header>
            <h2>Login</h2>
            <div className='container-input'>
                <div>
                    <Input type='text' placeholder='Username' onChangeValue={setEmail} />
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
            <Button buttonText='Login' onClick={handleLogin} />
            <span className='register' onClick={onToggleRegister}>Register</span>
        </motion.div>
    );
}

export default LayoutLogin