import './LayoutRegister.scss'
import Button from "../button/Button";
import Input from "../input/Input";
import { BiAperture } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { ILayoutRegisterProps } from '../../interfaces/Ilayouts/ILayoutRegisterProps';
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import theme from '../../styles/theme';
import axios from 'axios';
import { registerSchema } from '../../schemas/auth.schemas';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LayoutRegister: React.FC<ILayoutRegisterProps> = ({ onToggleRegister }) => {

    const navigate = useNavigate();
    const { login } = useAuth()
    const API_URL = import.meta.env.VITE_API_URL;
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: zodResolver(registerSchema),
        mode: "onChange"
    });
    const [errorMessage, setErrorMessage] = useState<string>('');

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post(`${API_URL}/auth/register`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            login(response.data.token);
            navigate('/home', {
                state: {
                    user: response.data.user,
                }
            })
        } catch (error: any) {
            if (error.response?.status === 400)
                setErrorMessage("User already exists");
            else
                setErrorMessage('Intern error on server');
        }
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, height: "auto" }}
                animate={{ opacity: 1, scale: 1, height: "auto" }}
                exit={{ opacity: 0, scale: 0.9, height: "auto" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="layout-register"
            >
                <header className='register-header'>
                    <BiAperture size={60} color={theme.primaryColor} />
                    <h1>BTAuth</h1>
                </header>
                <h2>Register</h2>
                <form className='container-input' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input
                            type='text'
                            placeholder='Username'
                            onChangeValue={(value) => setValue("name", value)}
                        />
                        <FaRegUser size={20} className="input-icon" />
                    </div>
                    {errors.name && (
                        <span className="error-message">{errors.name.message}</span>
                    )}
                    <div>
                        <Input
                            type='email'
                            placeholder='Email'
                            onChangeValue={(value) => setValue("email", value)}
                        />
                        <MdOutlineEmail size={20} className="input-icon" />
                    </div>
                    {errors.email && (
                        <span className="error-message">{errors.email.message}</span>
                    )}
                    <div>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            onChangeValue={(value) => setValue("password", value)}
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-toggle"
                        >
                            {showPassword ? <IoEyeOutline size={21} /> : <IoEyeOffOutline size={21} />}
                        </span>
                    </div>
                    {errors.password && (
                        <span className="error-message">{errors.password.message}</span>
                    )}
                    <div>
                        <Input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder='Confirm Password'
                            onChangeValue={(value) => setValue("confirmPassword", value)}
                        />
                        <span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="password-toggle"
                        >
                            {showConfirmPassword ? <IoEyeOutline size={21} /> : <IoEyeOffOutline size={21} />}
                        </span>
                    </div>
                    {errors.confirmPassword && (
                        <span className="error-message">{errors.confirmPassword.message}</span>
                    )}
                    {
                        errorMessage &&
                        <span>{errorMessage}</span>
                    }
                    <Button buttonText='Register' type='submit' />
                </form>
                <span className='login-link' onClick={onToggleRegister}>Login</span>
            </motion.div>
        </>
    )
}

export default LayoutRegister;