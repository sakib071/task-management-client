import TaskCard from "./TaskCard";


const TaskSection = () => {



    return (
        <div className="mt-32">
            <h3 className="text-3xl font-bold text-center border-b-4 w-fit mx-auto border-red-500">Tasks</h3>
            <div className="flex gap-5 mt-10 justify-center">
                <div>
                    <h3 className="card-title">Completed</h3>
                    <TaskCard></TaskCard>
                </div>
                <div>
                    <h3 className="card-title">On-Going</h3>
                    <TaskCard></TaskCard>
                </div>
                <div>
                    <h3 className="card-title">Upcoming</h3>
                    <TaskCard></TaskCard>
                </div>
            </div>

        </div>
    );
};

export default TaskSection;