import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <div className="flex items-center gap-5">
        <li className="hover:text-red-600 "><Link to='/'>Home</Link></li>
        {/* {
            user && <li className="hover:text-red-600"><Link to='/addTask'>Add Task</Link></li>
        } */}
        {
            user && <li className="hover:text-red-600"><Link to='/tasks'>Tasks</Link></li>
        }
        {
            user && <li className="hover:text-red-600"><Link to='/dashboard/profile'>Dashboard</Link></li>
        }
        {
            user ? <div className="flex items-center gap-5">
                <span className="ml-4">{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-error bg-red-500 hover:bg-red-600 text-white btn-sm">Log Out</button>
            </div> : <>
                <li className="hover:text-red-600"><Link to='/login'>Login</Link></li>
            </>
        }
    </div>
    return (
        <div className="navbar fixed z-10 bg-white max-w-screen-2xl mx-auto border-b-4 border-red-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-6 h-6" src="../../../../public/logo.png" alt="" />
                    <a className="normal-case font-semibold text-xl">Task Manager</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end">
                <ul className="flex gap-5 px-1 font-semibold">
                    {navOptions}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;