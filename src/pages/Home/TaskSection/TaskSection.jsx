import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const TaskSection = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://task-manager-server-tawny.vercel.app/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            });
    }, []);

    const updateTasks = (updatedTasks) => {
        setTasks(updatedTasks);
    };

    return (
        <div className="mt-32">
            <h3 className="text-3xl font-bold text-center border-b-4 w-fit mx-auto border-red-500">Tasks</h3>
            <div className="flex gap-5 mt-10 justify-center">
                <div>
                    <h3 className="card-title">Completed</h3>
                    <TaskCard tasks={tasks.filter(task => task.completed)} updateTasks={updateTasks} />
                </div>
                <div>
                    <h3 className="card-title">On-Going</h3>
                    <TaskCard tasks={tasks.filter(task => !task.completed && task.day === 'Today')} updateTasks={updateTasks} />
                </div>
                <div>
                    <h3 className="card-title">Upcoming</h3>
                    <TaskCard tasks={tasks.filter(task => !task.completed && task.day === 'Tomorrow')} updateTasks={updateTasks} />
                </div>
            </div>
        </div>
    );
};

export default TaskSection;
