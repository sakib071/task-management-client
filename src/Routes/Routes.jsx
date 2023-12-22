import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../providers/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/All Users/AllUsers";
import AdminRoute from "../providers/AdminRoute";
import AddTask from "../pages/AddTask/AddTask";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "addTask",
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "addTask",
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
]);
