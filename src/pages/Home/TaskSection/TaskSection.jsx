import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const TaskSection = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            });
    }, []);

    const completedTasks = tasks.filter(task => task.completed);
    const ongoingTasks = tasks.filter(task => !task.completed && task.day === 'Today');
    const upcomingTasks = tasks.filter(task => !task.completed && task.day === 'Tomorrow');


    const updateTasks = (updatedTasks) => {
        setTasks(updatedTasks);
    };

    return (
        <div className="pt-32">
            <h3 className="text-3xl font-bold text-center border-b-4 w-fit mx-auto border-red-500">Tasks</h3>
            <div className="flex gap-5 mt-10 justify-center">
                <div>
                    <h3 className="card-title">Completed</h3>
                    <TaskCard tasks={completedTasks} updateTasks={updateTasks} />
                </div>
                <div>
                    <h3 className="card-title">On-Going</h3>
                    <TaskCard tasks={ongoingTasks} updateTasks={updateTasks} />
                </div>
                <div>
                    <h3 className="card-title">Upcoming</h3>
                    <TaskCard tasks={upcomingTasks} updateTasks={updateTasks} />
                </div>
            </div>
        </div>
    );
};

export default TaskSection;
