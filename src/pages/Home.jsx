import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/useUserContext";

const Home = () => {
    const { setUser } = useUserContext();
    const navigate = useNavigate();
    const handleLogin = () => {
        setUser({
            name: "Luis",
            email: "luis@tmail.com"
        });
        navigate('/dashboard');
    };

    return (
        <>
            <h1>Home</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    );
};
export default Home;