import { useUserContext } from "../utils/useUserContext";

const Dashboard = () => {

    const { user } = useUserContext();

    return (
        <>
            <h1>Dashboard</h1>
            <h2>Bienvenid@ {user.name}</h2>
        </>
    );
};

export default Dashboard;