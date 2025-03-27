import LayoutLogin from "../../components/layout-login/LayoutLogin"
import { useState } from "react"
import LayoutRegister from "../../components/layout-register/LayoutRegister";

const Login = () => {

    const [isRegister, setIsRegister] = useState<boolean>(false);

    return (
        <section className="login-page">
            {isRegister ?
                <LayoutRegister onToggleRegister={() => setIsRegister((prev) => !prev)}/>
                :
                <LayoutLogin onToggleRegister={() => setIsRegister((prev) => !prev)}/>
            }
        </section>
    )
}

export default Login