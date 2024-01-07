import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import StaggeredDropDown from "../../components/DragnDrop/DragnDrop";


const AddTask = () => {
    const { user, flag, setFlag } = useContext(AuthContext);
    console.log(user?.email);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const priority = [
        { 'id': 1, 'type': 'Low' },
        { 'id': 2, 'type': 'Moderate' },
        { 'id': 3, 'type': 'High' }
    ]
    const days = [
        { 'id': 1, 'type': 'Today' },
        { 'id': 2, 'type': 'Tomorrow' },
    ]

    const [selectedPriority, setSelectedPriority] = useState('');
    const [selectedDay, setSelectedDay] = useState('');


    const onSubmit = async (data) => {
        try {
            const priorityColors = {
                Low: { bg: "bg-yellow-100", textColor: "text-yellow-500" },
                Moderate: { bg: "bg-blue-100", textColor: "text-blue-500" },
                High: { bg: "bg-red-100", textColor: "text-red-500" },
            };

            const newTask = {
                email: user.email,
                title: data.title,
                priority: selectedPriority,
                description: data.description,
                day: selectedDay,
                completed: false,
                ...priorityColors[selectedPriority],
            };

            const surveyRes = await axiosPublic.post("/tasks", newTask);

            if (surveyRes.data.insertedId) {
                reset();
                setFlag(!flag);
                Swal.fire({
                    icon: "success",
                    title: `${data.title} is added to the To-do.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <div className="pt-20 pb-40">
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto space-y-3 mt-10 p-5 rounded-md shadow-md">
                {/* <h3 className=" text-2xl font-semibold">Add New Task</h3> */}
                <div className="form-control w-full">
                    <input
                        type="title"
                        placeholder="Task Name"
                        {...register('title', { required: true })}
                        required
                        className="input input-sm rounded-sm w-full" />
                </div>
                <div className="form-control w-full">
                    <input
                        type="text"
                        placeholder="Description"
                        {...register('description', { required: true })}
                        required
                        className="input input-sm rounded-sm w-full" />
                </div>
                <div className="flex items-center">
                    <div className="form-control w-full">
                        {/* <select defaultValue="default" {...register('priority', { required: true })}
                            className="select select-sm rounded-sm">
                            <option disabled value="default">Set Priority</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select> */}
                        <StaggeredDropDown default='Set Priority' setItem={setSelectedPriority} priority={priority}></StaggeredDropDown>
                    </div>

                    <div className="form-control w-full">
                        {/* <select defaultValue="default" {...register('day', { required: true })}
                            className="select select-sm rounded-sm">
                            <option disabled value="default">Set Day</option>
                            <option value="Today">Today</option>
                            <option value="Tomorrow">Tomorrow</option>
                        </select> */}
                        <StaggeredDropDown default='Set Day' setItem={setSelectedDay} priority={days}></StaggeredDropDown>
                    </div>
                    <button className="btn btn-sm bg-red-500 hover:bg-slate-900 text-white">
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;