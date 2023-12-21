import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const TaskSection = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => {
                const filterCompleted = data.filter(task => task.completed);
                const filterOngoing = data.filter(task => !task.completed && task.day === 'Today');
                const filterUpcoming = data.filter(task => !task.completed && task.day === 'Tomorrow');

                setTasks({
                    completed: filterCompleted,
                    ongoing: filterOngoing,
                    upcoming: filterUpcoming,
                });
            });
    }, []);

    return (
        <div className="mt-32">
            <h3 className="text-3xl font-bold text-center border-b-4 w-fit mx-auto border-red-500">Tasks</h3>
            <div className="flex gap-5 mt-10 justify-center">
                <div>
                    <h3 className="card-title">Completed</h3>
                    <TaskCard tasks={tasks.completed} />
                </div>
                <div>
                    <h3 className="card-title">On-Going</h3>
                    <TaskCard tasks={tasks.ongoing} />
                </div>
                <div>
                    <h3 className="card-title">Upcoming</h3>
                    <TaskCard tasks={tasks.upcoming} />
                </div>
            </div>
        </div>
    );
};

export default TaskSection;
