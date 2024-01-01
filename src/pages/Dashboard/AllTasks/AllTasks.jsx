import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const AllTasks = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get('/tasks');
            return res.data;
        }
    });

    const handleDelete = task => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/tasks/${task._id}`)
                    .then(res => {
                        // console.log("Delete Response: ", res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Done!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 1000,
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="mt-5 m-10">
            <div className="flex text-lg mb-6">
                <h3>Total tasks: <span className="font-bold">{users.length}</span></h3>
                {/* <h3>Total Price: <span className="font-bold">${totalPrice}</span> </h3> */}
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Task name</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((task, index) => <tr key={task?._id}>
                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td>
                                    <div className="font-bold">{task?.title}</div>
                                </td>
                                <td>
                                    <div className="">{task?.description}</div>
                                </td>
                                <td>
                                    <div className={`${task.bg} ${task["textColor"]} font-semibold text-xs py-1 px-2 w-fit rounded-md`}>{task?.priority}</div>
                                </td>
                                <td>
                                    <div className="font-bold">{task?.day}</div>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(task)} className="btn btn-error btn-sm bg-red-500 btn-square text-white text-md rounded-md"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllTasks;