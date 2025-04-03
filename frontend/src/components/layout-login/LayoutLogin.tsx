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
import { useLoginForm } from '../../hooks/useAuthForm';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LayoutLogin: React.FC<ILayoutLoginProps> = ({ onToggleRegister }) => {

    const { login } = useAuth();
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {
        handleSubmit,
        formState: { errors },
        setValue
    } = useLoginForm();
    const [errorMessage, setErrorMessage] = useState<string>('');

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            login(response.data.token);
            navigate('/home');
        } catch (error: any) {
            if (error.response?.status === 401)
                setErrorMessage("Incorrect E-mail or Password");
            else
                setErrorMessage('Intern error on server');
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
            <form className='container-input' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input type='email' placeholder='Email' onChangeValue={(value) => setValue("email", value)} />
                    <FaRegUser size={20} />
                </div>
                {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                )}
                <div>
                    <Input type={showPassword ? 'text' : 'password'} placeholder='Password' onChangeValue={(value) => setValue("password", value)} />
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ?
                            <IoEyeOutline size={21} />
                            :
                            <IoEyeOffOutline size={21} />
                        }
                    </span>
                </div>
                {errors.password && (
                    <span className="error-message">{errors.password.message}</span>
                )}
                {
                    errorMessage &&
                    <span className='error-message'>{errorMessage}</span>
                }
                <Button buttonText='Login' type='submit' />
            </form>
            <span className='register-link' onClick={onToggleRegister}>Register</span>
        </motion.div>
    );
}

export default LayoutLogin