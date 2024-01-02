import { FaHome, FaTasks } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Dashboard = () => {

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 bg-red-50 min-h-screen border-r-4 border-r-red-500 text-red-500 pt-32">
                <ul className="menu p-4 text-lg space-y-3">
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addTask">
                            <IoMdAddCircle />
                            Add New Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allTasks">
                            <FaTasks />
                            All Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile">
                            <RxAvatar />
                            Profile</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;