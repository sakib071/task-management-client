import { useContext, useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { AuthContext } from "../../../providers/AuthProvider";


const TaskSection = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
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


    const updateTasks = (updateTasks) => {
        setTasks(updateTasks);
    };


    return (
        <div className="pt-32 h-screen overflow-hidden">
            <h3 className="text-3xl font-bold text-center border-b-4 w-fit mx-auto border-red-500">Tasks</h3>
            <div className="flex gap-5 mt-10 justify-center">
                <div>
                    <h3 className="card-title">Completed ({completedTasks.length})</h3>
                    <TaskCard tasks={completedTasks} updateTasks={updateTasks} />
                </div>
                <div>
                    <h3 className="card-title">On-Going ({ongoingTasks.length})</h3>
                    <TaskCard tasks={ongoingTasks} updateTasks={updateTasks} />
                </div>
                <div>
                    <h3 className="card-title">Upcoming ({upcomingTasks.length})</h3>
                    <TaskCard tasks={upcomingTasks} updateTasks={updateTasks} />
                </div>
            </div>
        </div>
    );
};

export default TaskSection;
