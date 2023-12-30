import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const Profile = () => {

    const { user, logOut } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => { setUserData(data); })
    }, [user]);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="min-h-screen pt-32">
            <h2 className="text-2xl text-center">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? <span className="font-semibold text-red-500">{user?.displayName}</span> : 'Back'
                }
            </h2>
            <div className="mt-10">
                <div className="max-w-xl rounded-md mx-auto text-center shadow-md">
                    <form className="card-body card-side">
                        <div className="avatar">
                            <div className="w-40 h-40 rounded">
                                <img src={user?.photoURL} alt="User Profile Photo" />
                            </div>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="w-full flex flex-col gap-5 text-left mx-auto justify-center">
                            <div className="">
                                <label className="label label-text p-0 text-lg" >Name</label>
                                <p className="font-semibold text-xl">{user?.displayName}</p>
                            </div>
                            <div className="">
                                <label className="label label-text p-0 text-lg" >Email</label>
                                <p className="font-semibold text-xl">{user?.email}</p>
                            </div>
                            <div>
                                <button onClick={handleLogOut} className="btn btn-error bg-red-500 hover:bg-red-600 text-white btn-sm">Log Out</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;