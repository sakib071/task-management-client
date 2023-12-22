import { FaHome, FaTasks } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-red-500 text-white pt-32">
                <ul className="menu p-4 text-lg">
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
                        <NavLink to="/dashboard/allTask">
                            <FaTasks />
                            All Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile">
                            <FaTasks />
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