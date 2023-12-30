import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const AddTask = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
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
                priority: data.priority,
                description: data.description,
                day: data.day,
                completed: false,
                ...priorityColors[data.priority],
            };

            const surveyRes = await axiosPublic.post("/tasks", newTask);

            if (surveyRes.data.insertedId) {
                reset();
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
        <div className="pt-20">
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 mx-auto space-y-3 mt-10 p-5 rounded-md shadow-md">
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
                <div className="flex gap-6">
                    <div className="form-control w-full">
                        <select defaultValue="default" {...register('priority', { required: true })}
                            className="select select-sm rounded-sm">
                            <option disabled value="default">Set Priority</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <select defaultValue="default" {...register('day', { required: true })}
                            className="select select-sm rounded-sm">
                            <option disabled value="default">Set Day</option>
                            <option value="Today">Today</option>
                            <option value="Tomorrow">Tomorrow</option>
                            <option value="Yesterday">Yesterday</option>
                        </select>
                    </div>
                    <button className="btn btn-sm bg-red-600 hover:bg-slate-900 text-white">
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;