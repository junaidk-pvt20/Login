import { Navigate, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { lazy } from "react";
const LazyLogin = lazy(() => import("./pages/Login"));
const LazyPreLogin = lazy(() => import("./layouts/PreLogin"));
const LazyUser = lazy(() => import("./pages/User"));
const LazySingleUser = lazy(() => import("./pages/User/single-user"));
const LazyPostLogin = lazy(() => import("./layouts/PostLogin"));
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace />,
    },
    {
        element: (
            <PublicRoute>
                <LazyPreLogin />
            </PublicRoute>
        ),
        children: [
            {
                path: "/login",
                element: <LazyLogin />,
            },
        ]
    },
    {
        element: (
            <ProtectedRoute>
                <LazyPostLogin />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/users",
                element: <LazyUser />,
            },
            {
                path: "/users/:name",
                element: <LazySingleUser />,
            },

        ]
    },
    {
        path: "/*",
        // I haven't made 404 page I will be routing to login page if you change url
        element: <Navigate to="/login" replace />,
    },
])