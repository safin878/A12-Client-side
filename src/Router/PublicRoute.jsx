import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const PublicRoute = ({ children }) => {
  const { User, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (User && !loading) {
      navigate("/");
    }
  }, [User, loading, navigate]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
        <span className="loading loading-bars loading-lg text-blue-500"></span>
      </div>
    );
  }

  return User ? null : children;
};

export default PublicRoute;
