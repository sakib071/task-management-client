import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const Profile = () => {

    const { user } = useAuth();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data.role);
                console.log(data.role);
            })
    }, [user]);

    return (
        <div className="min-h-screen pt-32">
            <h2 className="text-2xl text-center">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? <span className="font-semibold text-red-500">{user?.displayName}</span> : 'Back'
                }
            </h2>
            <div className="mt-32">
                <div className="max-w-4xl rounded-md mx-auto text-center">
                    <form className="card-body card-side">
                        <div className="avatar">
                            <div className="w-64 h-64 rounded">
                                <img src={user?.photoURL} alt="User Profile Photo" />
                            </div>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="w-full flex flex-col gap-5 text-left mx-auto justify-center">
                            <div className="">
                                <label className="label label-text p-0 text-2xl" >Name</label>
                                <p className="font-semibold text-3xl">{user?.displayName}</p>
                            </div>
                            <div className="">
                                <label className="label label-text p-0 text-2xl" >Email</label>
                                <p className="font-semibold text-3xl">{user?.email}</p>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
        </div>
    );
};

export default Profile;