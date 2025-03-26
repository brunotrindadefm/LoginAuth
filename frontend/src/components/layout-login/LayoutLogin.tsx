import './LayoutLogin.scss'
import Button from "../button/Button";
import Input from "../input/Input";
import { BiAperture } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5";

const LayoutLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [passwordType, setPasswordType] = useState('password');


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    useEffect(() => {
        console.log('username: ', username)
        console.log('password: ', password)
        console.log(showPassword)
    }, [username, password, showPassword])

    return (
        <div className="layout-login">
            <div className='login-header'>
                <BiAperture size={80} color='red' />
                <h1>BTAuth</h1>
            </div>
            <div className='container-input'>
                <div>
                    <Input type='text' placeholder='Username' onChangeValue={setUsername} />
                    <FaRegUser size={20} />
                </div>
                <div>
                    <Input type={passwordType} placeholder='Password' onChangeValue={setPassword} />
                    <span onClick={handleShowPassword}>
                        {showPassword ?
                            <IoEyeOutline size={20} />
                            :
                            <IoEyeOffSharp size={20} />
                        }
                    </span>
                </div>
            </div>
            <Button />
            <span className='forgot-password'>Forgot password</span>
            <span className='register'>Register</span>
        </div>
    );
}

export default LayoutLogin