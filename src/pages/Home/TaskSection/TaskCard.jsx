import toast, { Toaster } from 'react-hot-toast';


const TaskCard = ({ tasks, updateTasks }) => {
    const onToggleTaskCompletion = (taskId) => {
        console.log(taskId);
        if (updateTasks) {
            updateTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task._id === taskId ? { ...task, completed: !task.completed } : task
                )
            );
            const updatedTask = tasks.find((task) => task._id === taskId);

            if (updatedTask) {
                if (!updatedTask.completed) {
                    toast.success("Task completed!");
                }
                else {
                    toast('Task marked as incomplete!', {
                        icon: '🔄',
                    });
                }
            }
        }

    };


    return (
        <div className="flex gap-10 mt-5 justify-center">
            <div className="w-96 shadow-md rounded-md">
                <div className="p-5 space-y-5">
                    {tasks && tasks.length > 0 ? (
                        tasks.map((task) => (
                            <div key={task._id} className="p-2 rounded-md shadow-md">
                                <div className="flex items-center gap-5">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => onToggleTaskCompletion(task._id)}
                                        className="checkbox checkbox-xs rounded"
                                    />
                                    <div className="w-full">
                                        <p className={task.completed ? "line-through w-full font-bold" : "w-full font-bold"}>{task.title}</p>
                                        <p className={task.completed ? "line-through w-full" : "w-full"}>{task.description}</p>
                                        <p className="text-gray-400 font-semibold text-sm">{task.day}</p>
                                    </div>
                                    <span
                                        className={`${task.bg} ${task["textColor"]} font-semibold text-xs py-1 px-2 rounded-md`}
                                    >
                                        {task.priority}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No tasks available.</p>
                    )}
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default TaskCard;
