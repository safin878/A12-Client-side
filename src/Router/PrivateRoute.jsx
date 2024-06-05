import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const PrivateRoutes = ({ children }) => {
  const { User, loading } = useAuth();
  const loaction = useLocation();

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
        <span className="loading loading-bars loading-lg text-blue-500"></span>
      </div>
    );
  }

  if (User) {
    return children;
  }
  return <Navigate to="/singIn" state={{ from: loaction }} replace></Navigate>;
};

export default PrivateRoutes;
