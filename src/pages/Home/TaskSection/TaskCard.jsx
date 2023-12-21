import { useEffect, useState } from "react";

const TaskCard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('task.json')
            .then(res => res.json())
            .then(data => {
                const filterTask = data.filter(task => task.completed && task.day === 'tomorrow')
                setTasks(filterTask)
            })
    }, [])
    console.log(tasks);

    const toggleTaskCompletion = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="">
            <div className="flex gap-10 mt-5 justify-center">
                <div>
                    <div className="w-96 border-2 rounded-md">
                        <div className="p-5 space-y-5">
                            {tasks.map((task) => (
                                <div key={task.id} >
                                    <div className="flex items-center gap-5">
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => toggleTaskCompletion(task.id)}
                                            className="checkbox checkbox-xs rounded"
                                        />
                                        <p className={task.completed ? 'line-through w-full' : 'w-full'}>{task.text}</p>
                                        <p className="text-red-500 text-sm">{task.day}</p>
                                        <span className={`${task.bg} ${task['text-color']} font-semibold text-xs py-1 px-2 rounded-md`}>
                                            {task.priority}
                                        </span>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
