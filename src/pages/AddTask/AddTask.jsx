import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddTask = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        try {
            const newTask = {
                title: data.title,
                description: data.description,
                category: data.priority
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
        <div className="min-h-screen pt-32">
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 mx-auto mt-10">
                <h3 className=" text-2xl font-semibold">Add New Task</h3>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Task Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Task Name"
                        {...register('title', { required: true })}
                        required
                        className="input input-sm input-bordered w-full" />
                </div>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        {...register('description', { required: true })}
                        required
                        className="input input-sm input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    {/* category */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select defaultValue="default" {...register('priority', { required: true })}
                            className="select select-sm select-bordered w-full">
                            <option disabled value="default">Set priority</option>
                            <option value="Technology">Technology</option>
                            <option value="Food">Food</option>
                            <option value="Health">Health</option>
                            <option value="Work">Work</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-sm bg-red-600 hover:bg-slate-900 text-white mt-5">
                    Add Survey
                </button>
            </form>
        </div>
    );
};

export default AddTask;