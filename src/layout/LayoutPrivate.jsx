import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../utils/useUserContext";

const LayoutPrivate = () => {

    const { user } = useUserContext();

    return <>{user ? <Outlet /> : <Navigate to='/' />}</>;
};

export default LayoutPrivate;