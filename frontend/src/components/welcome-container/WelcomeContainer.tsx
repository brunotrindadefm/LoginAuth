import { useAuth } from "../../contexts/AuthContext"
import Button from "../button/Button";
import './WelcomeContainer.scss'
import { useLocation } from "react-router-dom";

const WelcomeContainer = () => {

    const { logout } = useAuth();
    const location = useLocation();
    const { user } = location.state || {}

    return (
        <section className="welcome-container">
            <h2>Seja bem vindo, {user.name}!</h2>
            <Button buttonText="Logout" type='button' onClick={logout} />
        </section>
    )
}

export default WelcomeContainer