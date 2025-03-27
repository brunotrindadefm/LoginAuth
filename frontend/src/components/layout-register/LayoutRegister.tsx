import './LayoutRegister.scss'
import Button from "../button/Button";
import Input from "../input/Input";
import { BiAperture } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { ILayoutRegisterProps } from './ILayoutRegisterProps';
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import theme from '../../styles/theme';

const LayoutRegister: React.FC<ILayoutRegisterProps> = ({ onToggleRegister }) => {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

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
                        <Input type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' onChangeValue={setConfirmPassword} />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ?
                                <IoEyeOutline size={21} />
                                :
                                <IoEyeOffOutline size={21} />
                            }
                        </span>
                    </div>
                </div>
                <Button buttonText='Register' />
                <span className='login' onClick={onToggleRegister}>Login</span>
            </motion.div>
        </>
    )
}

export default LayoutRegister