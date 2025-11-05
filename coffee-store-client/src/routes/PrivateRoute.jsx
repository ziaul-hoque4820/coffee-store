import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    // If user is not signed in, redirect to /signin
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    // Otherwise, render the protected content
    return children;
}
