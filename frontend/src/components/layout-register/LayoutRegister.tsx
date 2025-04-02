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

const LayoutRegister: React.FC<ILayoutRegisterProps> = ({ onToggleRegister }) => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post(`${API_URL}/auth/register`, { name: username, email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
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
                <div className='container-input'>
                    <div>
                        <Input type='text' placeholder='Username' onChangeValue={setUsername} />
                        <FaRegUser size={20} />
                    </div>
                    <div>
                        <Input type='email' placeholder='Email' onChangeValue={setEmail} />
                        <MdOutlineEmail size={20} />
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
                    <div>
                        <Input type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm Password' onChangeValue={setConfirmPassword} />
                        <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ?
                                <IoEyeOutline size={21} />
                                :
                                <IoEyeOffOutline size={21} />
                            }
                        </span>
                    </div>
                </div>
                <Button buttonText='Register' onClick={handleRegister} />
                <span className='login' onClick={onToggleRegister}>Login</span>
            </motion.div>
        </>
    )
}

export default LayoutRegister