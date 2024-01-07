import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";
import TaskSection from "../TaskSection/TaskSection";
import AddTask from "../../AddTask/AddTask";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Task Manager | Home</title>
            </Helmet>
            <Banner></Banner>
            <AddTask></AddTask>
            <TaskSection></TaskSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;